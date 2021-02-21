import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Board, GameInfo } from '../components';
import PropTypes, { InferProps } from 'prop-types';

const GamePage = ({ className }: InferProps<typeof GamePage.propTypes>): ReactElement => {
    return (
        <div className={`game ${className}`}>
            <GameInfo />
            <Board size={2}/>
        </div>
    );
};


GamePage.propTypes = {
    className: PropTypes.string.isRequired,
};

export default styled(GamePage)`
    display: flex;
    flex-direction: column;

    & > .board {
        flex-grow: 1;
    }
`;
