const CopyMessage = ({ showMessage }) => {
  return (
    <div className={`copy-message ${showMessage}`}>
      <p>Code Copied !</p>
    </div>
  );
};

export default CopyMessage;
