import React, { FC, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

type FailurePageProps = {
    className?: string;
    score: number;
    cleanUp: () => void;
};

const FailurePage: FC<FailurePageProps> = ({ className, score, cleanUp }): ReactElement => {
    const [scoreAchieved] = useState(score);
    useEffect(() => {
        cleanUp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`result failure ${className}`}>
            <h1>Unfortunately you lost this game.</h1>
            <h2>With score: {scoreAchieved}</h2>
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
