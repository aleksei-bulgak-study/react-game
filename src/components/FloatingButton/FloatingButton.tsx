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
    bottom: 6%;
    right: 1%;
    height: 60px;
    width: 100px;
    border-radius: 20px;
    background-color: red;
    border: none;
    outline: none;
    cursor: pointer;
    color: black;
    transition: bottom 1s ease-in-out;

    &:hover {
       background-color: #cc2e2e;
       border: 1px solid red;
    }

    @media (max-height: 750px) {
        bottom: 1px;
        font-size: 1rem;
        height: 60px;
        width: 60px;
    }
`;
