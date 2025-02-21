import { useState } from "react";
import { QUESTIONS } from "./quizQuestions";
import Question from "./components/Question";
import Summary from "./components/Summary";
import Button from "./components/Button";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerClick = (selectedAnswer) => {
    setUserAnswers([...userAnswers, selectedAnswer]);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizFinished(false);
  };

  return (
    <>
      {!quizStarted ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "3.125rem" }}>Javascript Quiz</h1>
          <Button text="Rozpocznij quiz" onClick={startQuiz} />
        </div>
      ) : !quizFinished ? (
        <Question
          question={QUESTIONS[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          onAnswerClick={handleAnswerClick}
        />
      ) : (
        <Summary
          userAnswers={userAnswers}
          questions={QUESTIONS}
          restartQuiz={restartQuiz}
        />
      )}
    </>
  );
};

export default App;