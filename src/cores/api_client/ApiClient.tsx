import { HTTPMethod } from "../models/GenericeEnums"
import { URL_PREFIX } from "../utils/constants/Strings"
import axios, { AxiosError, AxiosResponse } from "axios"
import { StorageKeys } from "../utils/constants/StorageKeys"
import { ErrorMessages } from "../utils/constants/ErrorMessages"
import { getStringValueFromLS } from "../services/storages/LocalStorage"
import { getStringValueFromSS, setStringValueAtSS } from "../services/storages/SessionStorage"

interface RequestProps {
    path: string,
    httpMethod: HTTPMethod,
    isProtected?: boolean | null,
    data?: Record<string, any> | null,
    queryParameters?: Record<string, any> | null,
}

const getNewAccessToken = async ({ previousRequest }: { previousRequest: RequestProps }): Promise<Record<string, any> | null> => {
    /// Check refresh token
    const refreshToken: string | null = getStringValueFromLS({ key: StorageKeys.REFRESH_TOKEN_KEY })
    if (!refreshToken) {
        return null
    }

    const path: string = 'api/token/refresh/'
    const response: Record<string, any> | null = await apiRequest({
        path: path,
        isProtected: false,
        httpMethod: HTTPMethod.post,
        data: { "refresh": refreshToken }
    })

    if (!response) {
        return null
    }

    const accessToken: string = response['access']
    setStringValueAtSS({ key: StorageKeys.ACCESS_TOKEN_KEY, value: accessToken })
    return await apiRequest(previousRequest)
}

const handleAxiosError = async ({ error, previousRequest }: { error: AxiosError, previousRequest: RequestProps }): Promise<Record<string, any> | null> => {
    const responseError: Record<string, any> | null = error.response?.data as Record<string, any>
    if (responseError['code'] === 'token_not_valid') {
        return await getNewAccessToken({ previousRequest: previousRequest })
    }

    return null
}

export const apiRequest = async ({
    path,
    data,
    httpMethod,
    queryParameters,
    isProtected = true,
}: RequestProps): Promise<Record<string, any> | null> => {
    let response: AxiosResponse<any, any> | undefined
    try {
        const urlPath: string = `${URL_PREFIX}/${path}`
        let headers: Record<string, any> = {
            'Content-Type': 'application/json',
        }

        if (isProtected) {
            const accessToken: string | null = getStringValueFromSS({ key: StorageKeys.ACCESS_TOKEN_KEY })
            if (accessToken === null) {
                const refreshToken: string | null = getStringValueFromLS({ key: StorageKeys.REFRESH_TOKEN_KEY })
                if (refreshToken === null) {
                    return null
                }

                await getNewAccessToken({
                    previousRequest: {
                        path: path,
                        data: data,
                        httpMethod: httpMethod,
                        queryParameters: queryParameters,
                        isProtected: isProtected,
                    }
                })
                return null
            }
            headers = { ...headers, "Authorization": `Bearer ${accessToken}` }
        }

        switch (httpMethod) {
            case HTTPMethod.get:
                response = await axios.get(
                    urlPath,
                    {
                        headers: headers,
                        params: queryParameters,
                    }
                )
                break
            case HTTPMethod.post:
                response = await axios.post(
                    urlPath,
                    data,
                    {
                        headers: headers,
                    }
                )
                break
            case HTTPMethod.put:
                response = await axios.put(
                    urlPath,
                    data,
                    {
                        headers: headers,
                        params: queryParameters,
                    }
                )
                break
            case HTTPMethod.patch:
                response = await axios.patch(
                    urlPath,
                    data,
                    {
                        headers: headers,
                        params: queryParameters,
                    }
                )
                break
            case HTTPMethod.delete:
                response = await axios.delete(
                    urlPath,
                    {
                        headers: headers,
                        params: queryParameters,
                    }
                )
                break

        }
    } catch (e) {
        console.log(e)
        if (axios.isAxiosError(e)) {
            return handleAxiosError({
                error: e,
                previousRequest: {
                    path: path,
                    data: data,
                    httpMethod: httpMethod,
                    queryParameters: queryParameters,
                    isProtected: isProtected,
                }
            })
        }
        throw e
    }

    if (!response) {
        return null
    }

    if (response.status === 200 || response.status === 201) {
        return response.data
    }
    throw new Error(ErrorMessages.FRIENDLY)
}

