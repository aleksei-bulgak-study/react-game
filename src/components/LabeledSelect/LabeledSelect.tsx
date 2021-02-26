import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

type LabeledSelectProps = {
    id: string;
    className?: string;
    selected: string | number;
    onClick: (event: ChangeEvent) => void;
    label: string;
    values: number[];
};

const LabeledSelect: React.FC<LabeledSelectProps> = ({ className, onClick, label, values, selected }) => (
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

export default styled(LabeledSelect)`
    color: ${(props) => props.theme.button.background};
    & > select {
        margin-left: 0.5rem;
    }
`;
