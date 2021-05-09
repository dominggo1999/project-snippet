import React, { useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Nav from './components/Nav';
import CopyMessage from './components/CopyMessage';
import Linter from './components/Linter';
import Redux from './components/Redux';
import { displayMessage, reducer } from './reducer/messageReducer';
import { initialTheme, themeReducer } from './reducer/themeReducer';

// Context
export const MessageContext = React.createContext();
export const ThemeContext = React.createContext();

const App = () => {
  const [message, dispatch] = useReducer(reducer, displayMessage);
  const [theme, dispatchTheme] = useReducer(themeReducer, initialTheme);

  const messageTimer = () => {
    setTimeout(() => { dispatch('hideMessage'); }, 1000);
  };

  const copyText = async (text) => {
    dispatch('showMessage');
    clearInterval(messageTimer);

    // Setelah 300 ms hide message
    messageTimer();
    try {
      await navigator.clipboard.writeText(text);
    } catch(err) {
      console.log('Error in copying text: ', err);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, dispatchTheme }}>
      <MessageContext.Provider value={{ message, dispatch }}>
        <div className="container">
          <Nav />
          <div className="right">
            <CopyMessage showMessage={message ? 'show' : 'hide'} />
            <Switch>
              <Route
                exact
                path="/"
              >
                <Linter
                  copyText={copyText}
                  theme={themes[theme]}
                />
              </Route>
              <Route
                exact
                path="/redux"
              >
                <Redux
                  copyText={copyText}
                  theme={themes[theme]}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </MessageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
