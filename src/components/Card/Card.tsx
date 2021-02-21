import React from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';

const Card = ({ className, value }: InferProps<typeof Card.propTypes>) => {
    return <div className={`card ${className}`}>{!!value && <span>{value}</span>}</div>;
};

Card.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.number,
    coordinates: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
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
    transition: top 2s ease-out, left 2s ease-out;
    top: ${(props) => props.coordinates.x}%;
    left: ${(props) => props.coordinates.y}%;

    & > * {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
    }
`;
