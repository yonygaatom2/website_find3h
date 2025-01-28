export const ValidString = (text: string | null | undefined): boolean => {
    if (text === null) {
        return false
    }

    if (text === '') {
        return false
    }

    return true;
}

export const validateString = (text: string | null | undefined): boolean => {
    return !!text?.trim();
}

export const validUsername = (text: string | null | undefined): string | null => {
    if (text === null || text === '' || text === undefined) {
        return 'Username cannot be empty.'
    }

    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(text)) {
        return "Username can only contain letters and spaces."
    }

    return null
}