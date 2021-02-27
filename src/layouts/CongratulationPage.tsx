import React, { ChangeEvent, FC, FormEvent, ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Result } from 'result';
import styled from 'styled-components';
import LabeledButton from '../components/LabeledButton';

type CongratulationPageProps = {
    className?: string;
    score: number;
    onStoreResult: (result: Result) => void;
};

const CongratulationPage: FC<CongratulationPageProps> = ({ className, score, onStoreResult }): ReactElement => {
    const history = useHistory();
    const [userName, setUserName] = useState('');

    const onResultStore = (e: FormEvent) => {
        e.preventDefault();
        onStoreResult({ username: userName, score });
        history.push('/score');
    };

    const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);

    return (
        <div className={`result success ${className}`}>
            <h1>Congratulations. You win!!!</h1>
            <h2>You can save you result {score} and preview on score board</h2>
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
