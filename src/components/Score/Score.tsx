import React, { FC } from 'react';
import styled from 'styled-components';

type ScoreProps = {
    className: string;
    score: number;
};

const Score: FC<ScoreProps> = ({ className, score = 0 }) => (
    <div className={`${className} score`}>
        <p className="score__title">Score</p>
        <p className="score__value">{score}</p>
    </div>
);

export default styled(Score)`
    background-color: ${(props) => props.theme.gameInfo.score.background};
    color: ${(props) => props.theme.gameInfo.score.font};
    padding: 10px;
    border-radius: 5px;

    .score__title {
        color: ${(props) => props.theme.gameInfo.score.title};
        text-transform: uppercase;
        text-align: center;
    }

    .score__value {
        color: ${(props) => props.theme.gameInfo.score.font};
        text-align: center;
    }
`;
