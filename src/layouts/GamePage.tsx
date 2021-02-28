import React, { Dispatch, FC, ReactElement, SetStateAction, useCallback, useEffect, useState } from 'react';
import { Result } from 'result';
import { Settings } from 'settings';
import { Status } from 'status';
import styled from 'styled-components';
import { Board, GameInfo } from '../components';
import { loadScoreFromStore, loadStateFromStorage, storeScoreInStore, storeStateInStore } from '../utils';
import CongratulationPage from './CongratulationPage';
import FailurePage from './FailurePage';

type GamePageProps = {
    className?: string;
    settings: Settings;
    onResultChange: Dispatch<SetStateAction<Result[]>>;
};

const GamePage: FC<GamePageProps> = ({
    className,
    settings,
    onResultChange,
}): ReactElement => {
    const [status, setStatus] = useState({ inProgress: true, failed: false, success: false } as Status);
    const [score, setScore] = useState(loadScoreFromStore(0));
    const [state, setState] = useState(loadStateFromStorage([]));

    const onStoreResult = (result: Result) => onResultChange((results) => [...results, result]);
    useEffect(() => storeScoreInStore(score), [score]);
    useEffect(() => storeStateInStore(state), [state]);

    const cleanUp = useCallback(() => {
        setScore(0);
        setState([]);
    }, []);

    return (
        <div className={`game ${className}`}>
            <GameInfo maxValue={settings.maxValue} score={score} />
            {status.inProgress && (
                <Board
                    state={state}
                    status={status}
                    onScoreChange={setScore}
                    onStatusChange={setStatus}
                    options={settings}
                    onStateChange={setState}
                />
            )}
            {status.failed && <FailurePage score={score} cleanUp={cleanUp} />}
            {status.success && (
                <CongratulationPage score={score} onStoreResult={onStoreResult} cleanUp={cleanUp} />
            )}
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
