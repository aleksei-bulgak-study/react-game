import React, { MouseEvent, ReactElement } from 'react';
import styled from 'styled-components';

type GeneralButtonProps = {
    className?: string,
    title: string,
    onClick: (event: MouseEvent) => void,
    label?: string,
    type?: 'submit'|'button'
};

const GeneralButton: React.FC<GeneralButtonProps> = ({
    className,
    title,
    label,
    type,
    onClick,
}): ReactElement => (
    <label className={className}>
        {label}
        <button onClick={onClick} type={type}>{title}</button>
    </label>
);

export default styled(GeneralButton)`
    color: ${(props) => props.theme.gameInfo.fontColor};

    & > button {
        background-color: ${(props) => props.theme.button.background};
        color: ${(props) => props.theme.button.color};
        cursor: pointer;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: none;
        margin-left: 1rem;
    }
`;
