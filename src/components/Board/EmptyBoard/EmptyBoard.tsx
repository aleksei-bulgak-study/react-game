import React, { ReactElement } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Card from '../../Card';

const EmptyBoard = ({ size }: InferProps<typeof EmptyBoard.propTypes>): ReactElement => {
    return (
        <div className="board__panel empty-board">
            {Array(size * size)
                .fill(0)
                .map((_, index) => (
                    <Card key={index} coordinates={{ x: 0, y: 0 }} />
                ))}
        </div>
    );
};

EmptyBoard.propTypes = {
    size: PropTypes.number,
};

EmptyBoard.defaultProps = {
    size: 4,
};

export default EmptyBoard;
