/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";

const LoadAnswers = function (props) {
  if (!props.return) {
    return (
      <button onClick={props.onClick} id="load-answers" type="button">
        See more answers
      </button>
    );
  }
  return (
    <button onClick={props.closeView} id="load-answers" type="button">
      Collapse answers
    </button>
  );
};

export default LoadAnswers;
