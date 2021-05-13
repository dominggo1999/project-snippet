import SyntaxHighlighter from 'react-syntax-highlighter';
import { linter, nodeLinter } from '../text/linter';

const Linter = ({ copyText, theme }) => {
  return (
    <div className="block-wrapper">
      <h1>.eslintrc.json</h1>
      <SyntaxHighlighter
        language="javascript"
        style={theme}
        className="snippet"
        onClick={() => copyText(linter)}
      >
        {linter}
      </SyntaxHighlighter>
      <h1>node .eslintrc.json</h1>
      <SyntaxHighlighter
        language="javascript"
        style={theme}
        className="snippet"
        onClick={() => copyText(nodeLinter)}
      >
        {nodeLinter}
      </SyntaxHighlighter>
    </div>
  );
};

export default Linter;
