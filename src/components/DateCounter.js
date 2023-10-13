import React, { useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
};

const DateCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date obj
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = () => {
    dispatch({ type: "dec" });
  };

  const inc = () => {
    dispatch({ type: "inc" });
  };

  const defineCount = (e) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = (e) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default DateCounter;
