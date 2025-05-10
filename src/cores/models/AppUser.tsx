import { GenderOptions } from "../utils/enums/GenderOptions";

export interface AppUser{
    email: string,
    username: string,
    dialCode?: string | null,
    phoneNumber?: string | null,
    dateOfBirth?: string | null,
    gender?: GenderOptions | null,
}