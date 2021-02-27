import React, { Dispatch, FC, ReactElement, SetStateAction, useState } from 'react';
import { Result } from 'result';
import { Settings } from 'settings';
import { Status } from 'status';
import styled from 'styled-components';
import { Board, GameInfo } from '../components';
import CongratulationPage from './CongratulationPage';
import FailurePage from './FailurePage';

type GamePageProps = {
    className?: string;
    settings: Settings;
    onResultChange: Dispatch<SetStateAction<Result[]>>;
};

const GamePage: FC<GamePageProps> = ({ className, settings, onResultChange }): ReactElement => {
    const [status, setStatus] = useState({ inProgress: true, failed: false, success: false } as Status);
    const [score, setScore] = useState(0);

    const onStoreResult = (result: Result) => onResultChange((results) => [...results, result]);

    return (
        <div className={`game ${className}`}>
            <GameInfo maxValue={settings.maxValue} score={score} />
            {status.inProgress && (
                <Board status={status} onScoreChange={setScore} onStatusChange={setStatus} options={settings} />
            )}
            {status.failed && <FailurePage score={score} />}
            {status.success && <CongratulationPage score={score} onStoreResult={onStoreResult} />}
        </div>
    );
};

export default styled(GamePage)`
    display: flex;
    flex-direction: column;

    & > .board {
        flex-grow: 1;
    }

    & > .result {
        flex-grow: 1;
    }
`;
