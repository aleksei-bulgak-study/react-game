import React from 'react';
import styled from 'styled-components';

const Score = ({ className, score = 0 }) => (
    <div className={`${className} score`}>
        <p className="score__title">Score</p>
        <p className="score__value">{score}</p>
    </div>
);

export default styled(Score)`
  background-color: #BBADA0;
  color: white;
  padding: 10px;
  border-radius: 5px;

  .score__title {
    color: #EBE2D7;
    text-transform: uppercase;
    text-align: center;
  }

  .score__value {
    color: white;
    text-align: center;
  }
`;
