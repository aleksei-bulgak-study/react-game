import { InferProps } from 'prop-types';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../Button';
import Score from '../Score';

const GameInfo = ({ className }: InferProps<typeof GameInfo.propTypes>): ReactElement => (
    <section className={`game-information info ${className}`}>
        <div className="info__title">2048</div>
        <p className="info__help">
            <strong>Play 2048 Game</strong>
            Join the numbers and get to the 2048 tile!
        </p>

        <Score score={123} className="info__score button" />
        <Button to="/" title="New Game" className="button info__link" />
    </section>
);

GameInfo.propTypes = {
    className: PropTypes.string.isRequired,
};

export default styled(GameInfo)`
    color: ${props => props.theme.gameInfo.fontColor};
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
