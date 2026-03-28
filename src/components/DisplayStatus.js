function DisplayStatus({ type, message }) {
  if (!message) return null;

  return <div className={`display-status ${type}`}>{message}</div>;
}

export default DisplayStatus;