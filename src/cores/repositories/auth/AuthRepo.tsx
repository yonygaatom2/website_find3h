import { apiRequest } from "../../api_client/ApiClient"
import { HTTPMethod } from "../../models/GenericeEnums"
import { SessionModel } from "../../models/SessionModel"
import { SignInWithEmailModel } from "../../models/SignInModel"

export const signInWithEmail = async (data: SignInWithEmailModel): Promise<SessionModel | null> => {
    const path: string = 'auth/sign-in/find3h/'
    const response: Record<string, any> | null = await apiRequest({
        path: path,
        data: data,
        isProtected: false,
        httpMethod: HTTPMethod.post,
    })

    if (response) {
        console.log(response.data)
        return response as SessionModel
    }

    return null
}