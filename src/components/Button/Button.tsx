import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({ className, title, to }): ReactElement => (
    <div className={className}>
        <Link to={to}>{title}</Link>
    </div>
);

export default styled(Button)`
    background-color: #8f7a66;
    cursor: pointer;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    width: 120px;
    height: 40px;
    line-height: 40px;
    & > a {
        color: white;
        text-decoration: none;
        font-weight: normal;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;
