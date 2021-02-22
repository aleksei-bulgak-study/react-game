import React, { ReactElement, useCallback, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import LabeledButton from '../components/LabeledButton';
import LabeledSelect from '../components/LabeledSelect';
import { loadFromStorage, storeValueInStorage } from '../utils';
import styled from 'styled-components';

const themes = ['light', 'dark'];

const SettingsPage = ({
    className,
    onThemeChange,
    boardSize,
    onBoardSizeChange,
}: InferProps<typeof SettingsPage.propTypes>): ReactElement => {
    const [currentTheme, setCurrentTheme] = useState(() => loadFromStorage('theme', themes[0]));

    const onThemeChangeClick = useCallback(() => {
        const newTheme = themes.find((theme) => theme !== currentTheme) || themes[0];
        storeValueInStorage('theme', newTheme);
        setCurrentTheme(newTheme);
        onThemeChange(newTheme);
    }, [currentTheme, onThemeChange]);

    const onSelectChange = useCallback(
        (e) => {
            const newBoardSize = e.target.value;
            onBoardSizeChange(Number.parseInt(newBoardSize));
            storeValueInStorage('boardSize', newBoardSize);
        },
        [onBoardSizeChange],
    );

    return (
        <section className={className}>
            <LabeledButton
                onClick={onThemeChangeClick}
                label="Switch theme:"
                title={`Swith to ${themes.filter((theme) => theme !== currentTheme)}`}
            />

            <LabeledSelect
                onClick={onSelectChange}
                label="Change board size:"
                values={['2', '4', '5', '6']}
                selected={'' + boardSize}
            />
        </section>
    );
};

SettingsPage.propTypes = {
    onThemeChange: PropTypes.func.isRequired,
    onBoardSizeChange: PropTypes.func.isRequired,
    boardSize: PropTypes.number.isRequired,
};

export default styled(SettingsPage)`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    & > * {
        margin: 0.5rem;
    }
`;
