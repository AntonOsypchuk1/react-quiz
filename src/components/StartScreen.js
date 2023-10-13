import React from "react";

const StartScreen = ({ numQuestions }) => {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <p>{numQuestions} questions to test your React mastery</p>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
};

export default StartScreen;