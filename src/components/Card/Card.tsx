import React, { FC, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Position } from 'card';

type CardProps = {
    className?: string;
    value: number;
    position: number;
    coordinates: Position;
    defaultVisibility?: boolean;
    deleted?: boolean;
};

const Card: FC<CardProps> = ({ className, value, position, defaultVisibility = false, deleted=false }): ReactElement => {
    const [visible, setVisible] = useState(defaultVisibility);
    useEffect(() => setVisible(true), []);
    return (
        <div className={`card card-${value} ${className} ${position} ${visible && !deleted ? 'card-visible' : ''}`}>
            {!!value && <span>{value}</span>}
        </div>
    );
};

export default styled(Card)`
    background-color: ${(props) => props.theme.board.card.background};
    border-radius: 5px;
    border: 1px solid black;
    color: ${(props) => props.theme.board.card.font};
    font-size: 3rem;
    position: relative;
    transition: top 0.5s ease-in-out, left 0.5s ease-in-out, opacity 0.5s ease-in, background-color 0.5s ease-out;
    will-change: opacity, top, left;
    top: ${(props) => props.coordinates.x}%;
    left: ${(props) => props.coordinates.y}%;
    opacity: 0;

    & > * {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
    }

    &.card-visible {
        opacity: 1;
    }

    &.card-2 {
        background-color: #eee4da;
    }

    &.card-4 {
        background-color: #eee1c9;
    }

    &.card-8 {
        background-color: #f3b27a;
    }

    &.card-16 {
        background-color: #f69664;
    }

    &.card-32 {
        background-color: #f77c5f;
    }

    &.card-64 {
        background-color: #f75f3b;
    }

    &.card-128 {
        background-color: #edd073;
        font-size: 2rem;
    }

    &.card-256 {
        background-color: #edcc62;
        font-size: 2rem;
    }

    &.card-512 {
        background-color: #edc950;
        font-size: 2rem;
    }

    &.card-1024 {
        background-color: #edc53f;
        font-size: 2rem;
    }

    &.card-2048 {
        background-color: #edc22e;
        font-size: 2rem;
    }
`;
