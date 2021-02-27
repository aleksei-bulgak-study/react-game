import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';

type FloatingButtonProps = {
    className?: string;
    title: string;
    onClick: (event: MouseEvent) => void;
};

const FloatingButton: FC<FloatingButtonProps> = ({ onClick, title, className }) => (
    <button onClick={onClick} className={className}>
        {title}
    </button>
);

export default styled(FloatingButton)`
    position: absolute;
    bottom: 10%;
    right: 2%;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: red;
    border: none;
    outline: none;
    cursor: pointer;
    color: black;

    &:hover {
       background-color: #cc2e2e;
       border: 1px solid red;
    }
`;
