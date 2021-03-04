import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type ButtonProps = {
    className: string;
    title: string;
    to: string;
};

const Button: FC<ButtonProps> = ({ className, title, to }): ReactElement => (
    <div className={className}>
        <Link to={to}>{title}</Link>
    </div>
);

export default styled(Button)`
    background-color: ${props => props.theme.button.background};
    cursor: pointer;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    width: 120px;
    height: 40px;
    line-height: 40px;
    & > a {
        color: ${props => props.theme.button.color};
        text-decoration: none;
        font-weight: normal;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    &:hover {
        filter: brightness(80%);
    }
`;
