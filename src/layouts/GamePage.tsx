import React, { FC, ReactElement, useState } from 'react';
import { Settings } from 'settings';
import { Status } from 'status';
import styled from 'styled-components';
import { Board, GameInfo } from '../components';

type GamePageProps = {
    className?: string;
    settings: Settings;
};

const GamePage: FC<GamePageProps> = ({ className, settings }): ReactElement => {
    const [status, setStatus] = useState({ inProgress: true, failed: false, success: false } as Status);
    const [score, setScore] = useState(0);

    return (
        <div className={`game ${className}`}>
            <GameInfo score={score} />
            {status.inProgress && (
                <Board status={status} onScoreChange={setScore} onStatusChange={setStatus} options={settings}/>
            )}
            {/* {status.failed && <FailurePage />}
            {status.success && <CongratulationPage score={score} />} */}
        </div>
    );
};

export default styled(GamePage)`
    display: flex;
    flex-direction: column;

    & > .board {
        flex-grow: 1;
    }
`;
