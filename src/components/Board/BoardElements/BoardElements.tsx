import React, { ReactElement } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Card from '../../Card';

const BoardElements = ({ cards }: InferProps<typeof BoardElements.propTypes>): ReactElement => {
    return (
        <div className="board__panel real-panel">
            {cards.map((card) => (
                <Card key={card.uuid} coordinates={card.coordinates} value={card.value} />
            ))}
        </div>
    );
};

BoardElements.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            uuid: PropTypes.number.isRequired,
            coordinates: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired,
            }).isRequired,
            value: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default BoardElements;
