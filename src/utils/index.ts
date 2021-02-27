import { Result } from "result";
import { Settings } from "settings";

export const loadFromStorage = (name: string, defaultValue: string): string => {
    return localStorage.getItem(name) || defaultValue;
};

export const loadSettingsFromStorage = (defaultValue: Settings): Settings => {
    const settings = localStorage.getItem('settings');
    return settings ? (JSON.parse(settings) as Settings) : defaultValue;
};

export const loadResultsFromStorage = (defaultValue: Result[]): Result[] => {
    const results = localStorage.getItem('results');
    return results ? (JSON.parse(results) as Result[]) : defaultValue;
};

export const storeValueInStorage = (name: string, value: string): void => {
    localStorage.setItem(name, value);
};

export const storeSettingsInStore = (value: Settings): void => {
    localStorage.setItem('settings', JSON.stringify(value));
};

export const storeResultsInStore = (value: Result[]): void => {
    localStorage.setItem('results', JSON.stringify(value));
};
