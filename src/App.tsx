import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import Layout from './layouts';
import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ className }: InferProps<typeof App.propTypes>): ReactElement => (
    <Router>
        <Header />
        <main className={className}>
            <Switch>
                <Route exact path="/play" component={Layout.GamePage} />
                <Route exact path="/settings" component={Layout.SettingsPage} />
                <Route exact path="/score" component={Layout.ScoreBoardPage} />
                <Redirect to={'/play'} />
            </Switch>
        </main>
        <Footer />
    </Router>
);

App.propTypes = {
    className: PropTypes.string.isRequired,
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
