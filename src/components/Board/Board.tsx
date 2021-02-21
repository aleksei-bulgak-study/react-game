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

interface CardElement {
    position: number;
    value: number;
}

const Board = ({
    className,
    size = 4,
    options = { elementsPerAction: 2, valuesAutoGenerated: [2, 4] },
}: InferProps<typeof Board.propTypes>): ReactElement => {
    const [cards, setCards] = useState(() => {
        const array = new Array(size * size);
        for (let i = 0; i < array.length; i++) {
            array[i] = { position: i, value: 0 };
        }
        return array as Array<CardElement>;
    });

    const addRandomValues = useCallback(() => {
        const emptyCards = cards.filter((card) => card.value === 0);
        const newCards = [...cards];
        for (let index = 0; index < options.elementsPerAction; index++) {
            const { position } = emptyCards[Math.floor(Math.random() * emptyCards.length)];
            console.log(position);
            const value = options.valuesAutoGenerated[Math.floor(Math.random() * options.valuesAutoGenerated.length)];
            const newCard = { position, value };
            newCards[position] = newCard;
        }
        setCards(newCards);
        console.log(newCards)
    }, [cards, options]);

    const keyHandler = (e: UIEvent) => {
        if (e.which === ARROWS.down) {
          
        } else if (e.which === ARROWS.left) {
        } else if (e.which === ARROWS.right) {
        } else if (e.which === ARROWS.up) {
        } else {
            return;
        }
        addRandomValues();
    };

    useEffect(() => {
        addRandomValues();
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', keyHandler);

        return () => {
            window.removeEventListener('keydown', keyHandler);
        };
    });

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
    }
`;
