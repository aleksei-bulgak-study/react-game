import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: auto;

    background-color: #faf8ef;

    display: flex;
    flex-direction:row;
  }

  div#root {
    flex-basis: 100%;
    flex-grow: 1;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    font-weight: bold;
  }
`;

const Root = (): ReactElement => (
    <>
        <GlobalStyle />
        <App />
    </>
);

ReactDOM.render(<Root />, document.getElementById('root'));
