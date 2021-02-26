import { Settings } from "settings";

export const loadFromStorage = (name: string, defaultValue: string): string => {
    return localStorage.getItem(name) || defaultValue;
};

export const loadSettingsFromStorage = (name: string, defaultValue: Settings): Settings => {
    const settings = localStorage.getItem(name);
    return settings ? (JSON.parse(settings) as Settings) : defaultValue;
};

export const storeValueInStorage = (name: string, value: string): void => {
    localStorage.setItem(name, value);
};
