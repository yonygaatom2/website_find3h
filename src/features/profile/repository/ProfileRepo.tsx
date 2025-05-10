import { HTTPMethod } from "../../../cores/models/GenericeEnums";
import { apiRequest } from "../../../cores/api_client/ApiClient";
import { ProfileData } from "../../../cores/utils/enums/ProfileData";

export const getProfile = async (): Promise<ProfileData | null> => {
    const path: string = 'profile/'
    const response: Record<string, any> | null =  await apiRequest({
        path: path,
        httpMethod: HTTPMethod.get,
    })

    if (response){
        console.log(response)
        return response as ProfileData
    }

    return null
}