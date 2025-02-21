const Button = ({ text, onClick, style = {} }) => {
  const defaultStyle = {
    margin: "0.625rem",
    padding: "0.625rem",
    cursor: "pointer",
    backgroundColor: "#2369ec",
    color: "#fff",
    border: "none",
    borderRadius: "0.3125rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    width: "31.25rem",
    lineHeight: "1.875rem",
  };

  return (
    <button onClick={onClick} style={{ ...defaultStyle, ...style }}>
      {text}
    </button>
  );
};

export default Button;
