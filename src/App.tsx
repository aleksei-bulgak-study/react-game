import React, { ReactElement, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import Layout from './layouts';
import Header from './components/Header';
import Footer from './components/Footer';
import { loadFromStorage } from './utils';

const App = ({ className, onThemeChange }: InferProps<typeof App.propTypes>): ReactElement => {
    const [boardSize, setBoardSize] = useState(Number.parseInt(loadFromStorage('boardSize', '4')));
    return (
        <Router>
            <Header />
            <main className={className}>
                <Switch>
                    <Route exact path="/play" component={() => <Layout.GamePage size={boardSize} />} />
                    <Route
                        exact
                        path="/settings"
                        component={() => (
                            <Layout.SettingsPage
                                onThemeChange={onThemeChange}
                                onBoardSizeChange={setBoardSize}
                                boardSize={boardSize}
                            />
                        )}
                    />
                    <Route exact path="/score" component={Layout.ScoreBoardPage} />
                    <Redirect to={'/play'} />
                </Switch>
            </main>
            <Footer />
        </Router>
    );
};

App.propTypes = {
    className: PropTypes.string.isRequired,
    onThemeChange: PropTypes.func,
};

export default styled(App)`
    min-width: 1024px;

    min-height: 500px;
    flex-grow: 1;
    padding: 2rem;
    display: flex;

    @media (max-width: 1024px) {
        min-width: 500px;
        padding: 0;
    }

    & > * {
        flex-grow: 1;
    }
`;
