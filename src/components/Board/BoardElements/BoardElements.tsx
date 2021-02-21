import React, { ReactElement } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Card from '../../Card';

const BoardElements = ({ cards }: InferProps<typeof BoardElements.propTypes>): ReactElement => {
    return (
        <div className="board__panel real-panel">
            {cards.map((card) => (
                <Card key={card.position} position={card.position} value={card.value} />
            ))}
        </div>
    );
};

BoardElements.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            position: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default BoardElements;
