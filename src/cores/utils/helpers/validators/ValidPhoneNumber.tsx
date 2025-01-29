export const ValidatePhoneNumber = (
    phoneNumber: string | null | undefined,
    dialCode: string | null | undefined
): string | null => {
    if (phoneNumber === null || phoneNumber === '' || phoneNumber === undefined){
        return  'Phone number cannot be empty.'
    }

    if (phoneNumber.length < 9 || phoneNumber.length > 12){
        return 'Please enter valid Phone Number'
    }

    if (dialCode === null || dialCode === '' || dialCode === undefined){
        return 'Dial Code cannot be empty.'
    }

    return null
}