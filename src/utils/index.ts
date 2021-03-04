import { CardElement } from 'card';
import { Result } from 'result';
import { Settings } from 'settings';

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

export const loadStateFromStorage = (defaultValue: CardElement[]): CardElement[] => {
    const elements = localStorage.getItem('state');
    return elements ? (JSON.parse(elements) as CardElement[]) : defaultValue;
};

export const storeStateInStore = (value: CardElement[]): void => {
    localStorage.setItem('state', JSON.stringify(value));
};

export const loadScoreFromStore = (defaultValue: number): number => {
    const element = localStorage.getItem('score');
    return element ? Number.parseInt(element) : defaultValue;
};

export const storeScoreInStore = (value: number): void => {
    localStorage.setItem('score', '' + value);
};