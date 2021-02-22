import { InferProps } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FloatingButton = ({ onClick, title, className }: InferProps<typeof FloatingButton.propTypes>) => (
    <button onClick={onClick} className={className}>
        {title}
    </button>
);

FloatingButton.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string,
};

export default styled(FloatingButton)`
    position: absolute;
    bottom: 10%;
    right: 2%;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: red;
    border: none;
    outline: none;
    cursor: pointer;
    color: black;
`;
