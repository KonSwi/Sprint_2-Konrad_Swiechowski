import Button from "./Button";

const Question = ({ question, questionIndex, onAnswerClick }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ color: "#2369ec", width: "100%" }}>
        {`Pytanie nr ${questionIndex + 1}: `}
        {question.text}
      </h2>
      {question.answers.map((answer, i) => (
        <Button
          key={i}
          text={answer.text}
          onClick={() => onAnswerClick(answer)}
          style={{ backgroundColor: "#000000" }}
        />
      ))}
    </div>
  );
};

export default Question;
