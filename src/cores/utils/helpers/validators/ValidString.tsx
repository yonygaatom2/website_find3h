export const ValidString = (text: string | null | undefined): boolean => {
    if (text === null){
        return false
    }

    return true;
}

export const validateString = (text: string | null | undefined): boolean => {
    return !!text?.trim();
}