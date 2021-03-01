import React, { FC } from 'react';
import Card from '../../Card';
import { CardElement } from 'card';

type BoardElementsProps = {
    cards: CardElement[];
};

const BoardElements: FC<BoardElementsProps> = ({ cards }) => {
    return (
        <div className="board__panel real-panel">
            {cards.map((card) => (
                <Card key={card.uuid} position={card.position} coordinates={card.coordinates} value={card.value} deleted={card.delete} />
            ))}
        </div>
    );
};

export default BoardElements;
