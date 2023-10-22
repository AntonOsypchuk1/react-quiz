import React from "react";
import { useQuiz } from "../context/QuizContext";

const Button = ({ action }) => {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return null;

  if (action === "previous" && index > 0)
    return (
      <button
        className="btn btn-ui btn-left"
        onClick={() => dispatch({ type: "previousQuestion" })}
      >
        &larr;
      </button>
    );

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
};

export default Button;
