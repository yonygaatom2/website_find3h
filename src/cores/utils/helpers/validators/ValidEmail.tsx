export const validEmail = (email: string | null | undefined): string | null => {
    if (email === '' || email === null || email === undefined) {
        return 'Email field cannot be empty.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email.'
    }

    return null
}