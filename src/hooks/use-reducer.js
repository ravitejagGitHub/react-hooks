import { useReducer, useState } from "react";

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "INC":
      return {
        ...state,
        count: state.count + 1,
      };

    case "TOGGLE_TEXT":
      return {
        ...state,
        showText: !state.showText,
      };
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  const onChange = () => {
    dispatch({ type: "INC" });
    dispatch({ type: "TOGGLE_TEXT" });
  };

  return (
    <div>
      <fieldset>
        <legend>Use Reducer:</legend>
        <h1>{state.count} </h1>
        <button onClick={onChange}> INC </button>
        &nbsp;
        <h2> {state.showText && "This is toggle text"}</h2>
      </fieldset>
    </div>
  );
};
