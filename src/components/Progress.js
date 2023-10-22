import React from "react";
import { useQuiz } from "../context/QuizContext";

const Progress = () => {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index}</strong> / {numQuestions}
      </p>

      <p>
        <strong>
          {points} / {maxPossiblePoints} points
        </strong>
      </p>
    </header>
  );
};

export default Progress;
