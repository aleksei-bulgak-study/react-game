import React, { FC, ReactElement } from 'react';
import Card from '../../Card';

type EmptyBoardProps = {
    size: number;
};

const EmptyBoard: FC<EmptyBoardProps> = ({ size }): ReactElement => {
    return (
        <div className="board__panel empty-board">
            {Array(size * size)
                .fill(0)
                .map((_, index) => (
                    <Card key={index} coordinates={{ x: 0, y: 0 }} defaultVisibility={true} position={0} value={0} />
                ))}
        </div>
    );
};

export default EmptyBoard;
