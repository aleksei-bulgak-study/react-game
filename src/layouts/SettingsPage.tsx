import React, { FC, ReactElement, useCallback, useState } from 'react';
import LabeledButton from '../components/LabeledButton';
import LabeledSelect from '../components/LabeledSelect';
import { loadFromStorage, storeValueInStorage } from '../utils';
import styled from 'styled-components';
import { Settings } from 'settings';

const themes = ['light', 'dark'];

type KeyValuePair = {
    key: string;
    value: number;
};

type SettingsPageProps = {
    className?: string;
    settings: Settings;
    onSettingsChange: (keyValuePair: KeyValuePair) => void;
    onThemeChange: (theme: string) => void;
};

const SettingsPage: FC<SettingsPageProps> = ({
    className,
    settings,
    onSettingsChange,
    onThemeChange,
}): ReactElement => {
    const [currentTheme, setCurrentTheme] = useState(() => loadFromStorage('theme', themes[0]));

    const onThemeChangeClick = useCallback(() => {
        const newTheme = themes.find((theme) => theme !== currentTheme) || themes[0];
        storeValueInStorage('theme', newTheme);
        setCurrentTheme(newTheme);
        onThemeChange(newTheme);
    }, [currentTheme, onThemeChange]);

    const onSelectChange = useCallback(
        (e) => {
            const { id, value } = e.target;
            onSettingsChange({ key: id, value });
        },
        [onSettingsChange],
    );

    return (
        <section className={className}>
            <LabeledButton
                onClick={onThemeChangeClick}
                label="Switch theme:"
                title={`Swith to ${themes.filter((theme) => theme !== currentTheme)}`}
            />

            <LabeledSelect
                id="boardSize"
                onClick={onSelectChange}
                label="Change board size:"
                values={[2, 4, 5, 6]}
                selected={settings.boardSize}
            />

            <LabeledSelect
                id="maxValue"
                onClick={onSelectChange}
                label="Choose max number that you want to achieve:"
                values={[8, 16, 32, 64, 128, 256, 512, 1024, 2048]}
                selected={settings.maxValue}
            />

            <div className="hot-keys">
                <h1>Here is list of controls:</h1>
                <ul>
                    <li>↑ - use up keyboard arrow to move elements to the top</li>
                    <li>↓ - use down keyboard arrow to move elements to the bottom</li>
                    <li>← - use left keyboard arrow to move elements to the left</li>
                    <li>→ - use right keyboard arrow to move elements to the right</li>
                </ul>
            </div>
        </section>
    );
};

export default styled(SettingsPage)`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    & > * {
        margin: 0.5rem;
    }
    color: ${(props) => props.theme.gameInfo.fontColor};
    & li {
        list-style-type: none;
    }
`;
