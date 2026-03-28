function DisplayStatus({ type, message }) {
  const style = {
    color: type === "success" ? "green" : "red",
    fontWeight: "bold",
    marginTop: "15px",
  };

  return <div style={style}>{message}</div>;
}

export default DisplayStatus;