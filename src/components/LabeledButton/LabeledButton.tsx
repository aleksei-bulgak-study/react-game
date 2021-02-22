import { InferProps } from 'prop-types';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GeneralButton = ({
    className,
    title,
    label,
    onClick,
}: InferProps<typeof GeneralButton.propTypes>): ReactElement => (
    <label className={className}>
        {label}
        <button onClick={onClick}>{title}</button>
    </label>
);

GeneralButton.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
};

export default styled(GeneralButton)`
    color: ${(props) => props.theme.button.background};

    & > button {
        background-color: ${(props) => props.theme.button.background};
        color: ${(props) => props.theme.button.color};
        cursor: pointer;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: none;
        margin-left: 1rem;
    }
`;
