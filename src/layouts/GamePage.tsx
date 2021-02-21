import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Board, GameInfo } from '../components';
import PropTypes, { InferProps } from 'prop-types';

const GamePage = ({ className }: InferProps<typeof GamePage.propTypes>): ReactElement => {
    const [status, setStatus] = useState({inProgress: true, failed: false, success: true});

    return (
        <div className={`game ${className}`}>
            <GameInfo status={status} onStatusChange={setStatus}/>
            <Board size={2} status={status} onStatusChange={setStatus}/>
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
