import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';

import logo from '../../assets/rs_school_js.svg';

const Footer = ({ className }: InferProps<typeof Footer.propTypes>): ReactElement => (
    <footer className={className}>
        <img className="footer__logo" src={logo} alt="Rolling Scopes School" />
        <div className="footer__info">
            <a className="course-link" href="https://rs.school/react/" target="_blank" rel="noreferrer">
                Rolling Scopes School
            </a>
            <p className="copyright">
                © {new Date().getFullYear()}
                <a href="https://github.com/aleksei-bulgak-study" target="_blank" rel="noreferrer">
                    Aliaksei Bulhak
                </a>
            </p>
        </div>
    </footer>
);

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Footer)`
    background-color: black;
    width: 100%;
    /* position: absolute;
    left: 0;
    right: 0;
    bottom: 0; */
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .footer__logo {
        background-color: white;
        top: 0;
        left: 0;
        bottom: 0;
        max-height: 3rem;
        float: left;
    }

    .footer__info {
        text-align: center;
        flex-grow: 1;
        .course-link {
            color: white;
        }

        .copyright {
            color: white;
            a {
              color: inherit;
              font-size: inherit;
              margin-left: 0.5rem;
            }
        }
    }
`;
