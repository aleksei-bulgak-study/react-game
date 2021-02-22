import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ className }: InferProps<typeof Header.propTypes>): ReactElement => (
    <header className={className}>
        <nav className="header__navigation">
            <ul className="navigation__list">
                <li>
                    <Link to="/">New game</Link>
                </li>
                <li>
                    <Link to="/score">Rank table</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    className: PropTypes.string.isRequired,
};

export default styled(Header)`
    background-color: ${props => props.theme.header.background};
    color: ${props => props.theme.header.fontColor};
    width: 100%;
    padding: 1rem;

    .navigation__list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        text-decoration: none;
        list-style-type: none;

        & a {
            color: ${props => props.theme.header.fontColor};
        }
    }
`;
