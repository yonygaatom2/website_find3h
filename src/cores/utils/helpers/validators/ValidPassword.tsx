export const validPassword = (password: string): string | null => {
    if (password === '') {
        return 'Password field cannot be empty.';
    }

    return null
}

export const passwordHasValidPattern = (password: string): string | null => {
    if (password === '') {
        return 'Password field cannot be empty.';
    }

    // Since the password must follow the pattern below, it is being directly validated in the frontend.
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,20}$/;
    if (!passwordRegex.test(password)) {
        return 'Invalid Credentials.';
    }

    return null;
}