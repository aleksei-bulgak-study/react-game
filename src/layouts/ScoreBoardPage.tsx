import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Result } from 'result';
import styled from 'styled-components';

type ScoreBoardPageProps = {
    className?: string;
    results: Result[];
};

const ScoreBoardPage: FC<ScoreBoardPageProps> = ({ className, results }): ReactElement => {
    const [resultsForPreview, setResultsForPreview] = useState([] as Result[]);

    useEffect(() => {
        const sortedResults = results
            .sort((first, second) => (first.score > second.score ? -1 : first.score < second.score ? 1 : 0))
            .slice(0, 10);
        setResultsForPreview(sortedResults);
    }, [resultsForPreview, results]);

    return (
        <div className={`scores ${className}`}>
            <h1>Top 10 scores</h1>
            <div className="scores__list">
                <div className="score__element__header">
                    <div className="score__element__index score__element__field">Position</div>
                    <div className="score__element__username score__element__field">Username</div>
                    <div className="score__element__score score__element__field">Score</div>
                </div>
                {resultsForPreview.map((element, index) => (
                    <div key={element.score + element.username} className="score__element">
                        <div className="score__element__index score__element__field">{index + 1}</div>
                        <div className="score__element__username score__element__field">{element.username}</div>
                        <div className="score__element__score score__element__field">{element.score}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default styled(ScoreBoardPage)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.theme.gameInfo.fontColor};
    & > .scores__list {
        flex-grow: 0.7;
        min-width: 80%;

        & > .score__element__header {
            margin-bottom: 1rem;
        }

        & > .score__element,
        .score__element__header {
            margin-top: 1.5rem;
            border-bottom: 1px solid grey;

            display: flex;
            flex-direction: row;
            justify-content: flex-start;
        }

        & .score__element__index {
            width: 20%;
        }

        & .score__element__username {
            width: 40%;
        }

        & .score__element__score {
            width: 40%;
        }
    }
`;
