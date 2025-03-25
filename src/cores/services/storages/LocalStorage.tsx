export const setStringValueAtLS = ({ key, value }: { key: string, value: string }) => {
    localStorage.setItem(key, value);
}

export const getStringValueFromLS = ({ key }: { key: string }): string | null => {
    const value: string | null = localStorage.getItem(key);
    return value
}