import { GenderOptions } from "../utils/enums/GenderOptions";

export interface SearchModel {
    email?: string | null | undefined,
    username?: string | null | undefined,
    dialCode?: string | null | undefined,
    phoneNumber?: string | null | undefined,
    gender?: GenderOptions | null | undefined,
}