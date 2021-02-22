import React from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';

const LabeledSelect = ({ className, onClick, label, values, selected }: InferProps<typeof LabeledSelect.propTypes>) => (
    <label className={className}>
        {label}
        <select onChange={onClick} value={selected}>
            {values.map((value) => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>
    </label>
);

LabeledSelect.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string,
};

export default styled(LabeledSelect)`
    color: ${(props) => props.theme.button.background};
    & > select {
        margin-left: 0.5rem;
    }
`;
