import React, { FC } from 'react';
import styled from 'styled-components';

import logo from '../../assets/rs_school_js.svg';

type FooterProps = {
    className?: string;
};

const Footer: FC<FooterProps> = ({ className }) => (
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

export default styled(Footer)`
    background-color: ${(props) => props.theme.footer.background};
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .footer__logo {
        background-color: ${(props) => props.theme.footer.fontColor};
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
            color: ${(props) => props.theme.footer.fontColor};
        }

        .copyright {
            color: ${(props) => props.theme.footer.fontColor};
            a {
                color: inherit;
                font-size: inherit;
                margin-left: 0.5rem;
            }
        }
    }
`;
