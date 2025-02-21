import Button from "./Button";

const Summary = ({ userAnswers, questions, restartQuiz }) => {
  const numberOfCorrectAnswers = userAnswers.filter((answer) => answer.isCorrect).length;
  const resultInPercentage = (numberOfCorrectAnswers / questions.length) * 100;
  const quizResult = resultInPercentage >= 80;

  return (
    <div style={{ textAlign: "center", padding: "1.25rem" }}>
      <h2 style={{ color: quizResult ? "#008000" : "#f51b00" }}>
        {quizResult ? "Gratulacje! Quiz zaliczony!" : "Niestety, quiz niezaliczony."}
      </h2>

      <p>
        Twój wynik to: <strong style={{ color: quizResult ? "#008000" : "#f51b00" }}>{resultInPercentage.toFixed(2)}% </strong>  
        ({numberOfCorrectAnswers} z {questions.length} poprawnych odpowiedzi).
      </p>

        <ul style={{ listStyleType: "none", padding: 0 }}>
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];

          return (
            <li key={index} style={{color: "#2369ec",display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
              <strong>{`Pytanie nr ${index + 1}: `}{question.text}</strong>
              <p style={{color: "#000000"}}>
                Twoja odpowiedź: {""} 
                <span style={{ color: userAnswer?.isCorrect ? "#008000" : "#f51b00" }}>
                  {userAnswer.text}
                </span>
              </p>
            </li>
          );
        })}
      </ul>

      <Button text="Powrót do startu" onClick={restartQuiz} style={{ backgroundColor: "#008000" }} />
    </div>
  );
};

export default Summary;
