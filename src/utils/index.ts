export const loadFromStorage = (name: string, defaultValue: string): string => {
    return localStorage.getItem(name) || defaultValue;
};

export const storeValueInStorage = (name: string, value: string): void => {
    localStorage.setItem(name, value);
};
