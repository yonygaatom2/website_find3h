export const validEmail = (email: string): string | null => {
    if (email === '') {
        return 'Email field cannot be empty.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email.'
    }

    return null
}