import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

type FailurePageProps = {
    className?: string;
    score: number;
};

const FailurePage: FC<FailurePageProps> = ({ className, score }): ReactElement => {
    return (
        <div className={`result failure ${className}`}>
            <h1>Unfortunately you lost this game.</h1>
            <h2>With score: {score}</h2>
        </div>
    );
};

export default styled(FailurePage)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.board.card.font}
`;
