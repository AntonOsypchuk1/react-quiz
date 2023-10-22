import React from "react";
import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

const Question = () => {
  const { question, dispatch, answer } = useQuiz();

  return (
    <div>
      <h4>{question.question}</h4>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
