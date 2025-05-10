export const setStringValueAtSS = ({ key, value }: { key: string, value: string }) => {
    sessionStorage.setItem(key, value);
}

export const getStringValueFromSS = ({ key }: { key: string }): string | null => {
    const value: string | null = sessionStorage.getItem(key);
    return value
}