import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Score from '../Score';

type GameInfoProps = {
    className?: string;
    score?: number;
    maxValue: number;
};

const GameInfo: FC<GameInfoProps> = ({ className, score = 0, maxValue }): ReactElement => (
    <section className={`game-information info ${className}`}>
        <div className="info__title">{maxValue}</div>
        <p className="info__help">
            <strong>Play {maxValue} Game</strong>
            Join the numbers and get to the {maxValue} tile!
        </p>

        <Score score={score} className="info__score button" />
        <Button to="/refresh" title="New Game" className="button info__link" />
    </section>
);

export default styled(GameInfo)`
    color: ${(props) => props.theme.gameInfo.fontColor};
    position: relative;

    & > .info__title {
        font-size: 5rem;
    }

    & > .info__help {
        & > strong {
            display: block;
        }
    }

    & > .info__score {
        position: absolute;
        top: 10%;
        right: 0;
    }

    & > .info__link {
        position: absolute;
        bottom: 0%;
        right: 0;
    }
`;
