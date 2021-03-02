import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';

import image from '../../assets/expand.svg';

type FullScreenButtonProps = {
    className?: string;
    onClick: (event: MouseEvent) => void;
};

const FullScreenButton: FC<FullScreenButtonProps> = ({ onClick, className }) => (
    <button onClick={onClick} className={className}></button>
);

export default styled(FullScreenButton)`
    position: absolute;
    bottom: 3rem;
    right: 0%;
    height: 3rem;
    width: 3rem;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.gameInfo.fontColor};
    mask-image: url(${() => image});
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;

    &:hover {
        filter: brightness(120%);
    }

    @media (max-height: 900px) {
        top: 0%;
        fill: white;
        background-color: white;
    }
`;
