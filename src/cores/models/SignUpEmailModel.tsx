export interface SignUpWithEmailModel{
    email: string,
    gender: string,
    username: string,
    password: string,
    dateOfBirth: string,
    dialCode?: string | null,
    phoneNumber?: string | null,
}