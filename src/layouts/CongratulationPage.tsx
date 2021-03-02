import React, { ChangeEvent, FC, FormEvent, ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Result } from 'result';
import styled from 'styled-components';
import LabeledButton from '../components/LabeledButton';

type CongratulationPageProps = {
    className?: string;
    score: number;
    onStoreResult: (result: Result) => void;
    cleanUp: () => void;
};

const CongratulationPage: FC<CongratulationPageProps> = ({
    className,
    score,
    onStoreResult,
    cleanUp,
}): ReactElement => {
    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [scoreAchieved] = useState(score);

    const onResultStore = (e: FormEvent) => {
        e.preventDefault();
        onStoreResult({ username: userName, score: scoreAchieved });
        history.push('/score');
    };

    const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);

    useEffect(() => {
        cleanUp();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`result success ${className}`}>
            <h1>Congratulations. You win!!!</h1>
            <h2>You can save you result {scoreAchieved} and preview on score board</h2>
            <form className="result__form" onSubmit={onResultStore}>
                <input
                    className="result__form__username"
                    type="text"
                    required
                    value={userName}
                    onChange={onUserNameChange}
                />
                <LabeledButton className="result__form--submit" title="Submit result" onClick={() => '#'} />
            </form>
        </div>
    );
};

export default styled(CongratulationPage)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${(props) => props.theme.board.card.font};
    & > .result__form {
        flex-grow: 0.5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        & > .result__form__username {
            display: block;
            margin-bottom: 1rem;
            width: 100%;
        }
        & > .result__form--submit {
            margin: 0 auto;
            & > button {
                margin: 0;
            }
        }
    }
`;
