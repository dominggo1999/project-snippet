import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  store, rootReducer, actionTypes, actions, reducer,
} from '../text/redux';

const Redux = ({ copyText, theme }) => {
  return (
    <>
      <h1>Redux</h1>
      <div className="block-wrapper">
        <h2>store.js</h2>
        <SyntaxHighlighter
          language="javascript"
          style={theme}
          className="snippet"
          onClick={() => copyText(store)}
        >
          {store}
        </SyntaxHighlighter>
        <h2>rootReducer.js</h2>
        <SyntaxHighlighter
          language="javascript"
          style={theme}
          className="snippet"
          onClick={() => copyText(rootReducer)}
        >
          {rootReducer}
        </SyntaxHighlighter>
        <h2>actionTypes.js</h2>
        <SyntaxHighlighter
          language="javascript"
          style={theme}
          className="snippet"
          onClick={() => copyText(actionTypes)}
        >
          {actionTypes}
        </SyntaxHighlighter>
        <h2>actions.js</h2>
        <SyntaxHighlighter
          language="javascript"
          style={theme}
          className="snippet"
          onClick={() => copyText(actions)}
        >
          {actions}
        </SyntaxHighlighter>
        <h2>reducer.js</h2>
        <SyntaxHighlighter
          language="javascript"
          style={theme}
          className="snippet"
          onClick={() => copyText(reducer)}
        >
          {reducer}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Redux;
