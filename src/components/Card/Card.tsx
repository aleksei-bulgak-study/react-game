import React from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';

const Card = ({ className, value }: InferProps<typeof Card.propTypes>) => {
    return <div className={`card ${className}`}>{!!value && <span>{value}</span>}</div>;
};

Card.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.number,
    position: PropTypes.number.isRequired,
};

Card.defaultProps = {
    value: 0,
};

export default styled(Card)`
    background-color: #cdc1b4;
    border-radius: 5px;
    color: #776e65;
    font-size: 3rem;
    position: relative;

    & > * {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
    }
`;
