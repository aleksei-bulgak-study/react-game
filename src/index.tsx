import React, { ReactElement, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { light, dark } from './theme/Theme';

import App from './App';
import { loadFromStorage } from './utils';

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 100vw;
    min-height: 100vh;
    margin: auto;

    background-color: ${(props) => props.theme.boardColor};

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

const Root = (): ReactElement => {
    const [theme, setTheme] = useState(() => (loadFromStorage('theme', 'light') === 'dark' ? dark : light));
    const onThemeChange = useCallback((themeName) => setTheme(themeName === 'dark' ? dark : light), [setTheme]);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App onThemeChange={onThemeChange} />
        </ThemeProvider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
