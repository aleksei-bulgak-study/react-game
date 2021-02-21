import React from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import Card from '../Card';

const CardMovable = ({ className, value }: InferProps<typeof CardMovable.propTypes>) => (
    <div className={`card ${className}`}>
        <Card value={value} />
    </div>
);

CardMovable.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.number,
    position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
};

CardMovable.defaultProps = {
    value: 0,
};

export default styled(CardMovable)`
    position: absolute;
    transition: top 2s ease-out, left 2s ease-out;
    top: ${(props) => props.position.x}%;
    left: ${(props) => props.position.y}%;
`;
