import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EmptyBoard from './EmptyBoard';
import BoardElements from './BoardElements';
import { InferProps } from 'prop-types';

const ARROWS = {
    right: 39,
    down: 40,
    up: 38,
    left: 37,
};

interface Position {
    x: number;
    y: number;
}

interface CardElement {
    coordinates: Position;
    position: number;
    value: number;
}

const Board = ({
    className,
    size = 4,
    options = { elementsPerAction: 2, valuesAutoGenerated: [2, 4] },
    status,
    onStatusChange
}: InferProps<typeof Board.propTypes>): ReactElement => {
    const positions = size * size;
    const [cards, setCards] = useState([] as Array<CardElement>);

    const addRandomValues = useCallback(() => {
        const newCards = [...cards];
        for (let index = 0; index < options.elementsPerAction; index++) {
            let emptyPositions = Array(positions)
                .fill(0)
                .map((_, index) => index);
            newCards.forEach((card) => emptyPositions = emptyPositions.filter(pos => card.position !== pos));

            if(emptyPositions.length === 0) {
                onStatusChange({...status, failed: true});
                return;
            }

            const position = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
            const value = options.valuesAutoGenerated[Math.floor(Math.random() * options.valuesAutoGenerated.length)];
            const newCard = {
                position,
                coordinates: {
                    y: (Math.floor(position % size) * 100) / size,
                    x: (Math.floor(position / size) * 100) / size,
                },
                value,
                uuid: Math.random() * position,
            };
            newCards.push(newCard);
        }
        setCards(newCards);
    }, [cards, options, positions, size, status, onStatusChange]);

    const keyHandler = useCallback(
        (e: UIEvent) => {
            if (e.which === ARROWS.down) {
            } else if (e.which === ARROWS.left) {
            } else if (e.which === ARROWS.right) {
            } else if (e.which === ARROWS.up) {
            } else {
                return;
            }
            addRandomValues();
        },
        [addRandomValues],
    );

    useEffect(() => {
        addRandomValues();
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', keyHandler);

        return () => {
            window.removeEventListener('keydown', keyHandler);
        };
    }, [cards, keyHandler]);

    return (
        <div className={`board ${className}`}>
            <div className="board__map">
                <EmptyBoard size={size} />
                <BoardElements cards={cards} />
            </div>
        </div>
    );
};

Board.propTypes = {
    className: PropTypes.string.isRequired,
    size: PropTypes.number,
    options: PropTypes.shape({
        elementsPerAction: PropTypes.number.isRequired,
        valuesAutoGenerated: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
};

export default styled(Board)`
    display: flex;
    align-items: center;
    justify-content: center;

    & > .board__map {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        width: clamp(500px, 50%, 1024px);
        height: clamp(500px, 50%, 1024px);

        background-color: #bbada0;
        border-radius: 10px;
        position: relative;

        & .card {
            flex-basis: calc(100% / ${(props) => props.size} - 1rem);
            margin: 0.5rem;
            display: inline-block;
        }

        & > .board__panel {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        & > .real-panel {
            display: block;

            & > .card {
                width: calc(100% / ${(props) => props.size} - 1rem);
                height: calc(100% / ${(props) => props.size} - 1rem);
                margin: 0.5rem;
                display: inline-block;
                position: absolute;
            }
        }
    }
`;