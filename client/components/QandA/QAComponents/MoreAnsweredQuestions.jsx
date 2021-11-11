/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";

const MoreAnsweredQuestions = function (props) {
  if (!props.return) {
    return (
      <button onClick={props.onClick} id="load-questions" type="button">
        See more questions
      </button>
    );
  }
  return (
    <button onClick={props.closeView} id="load-questions" type="button">
      Hide questions
    </button>
  );
};

export default MoreAnsweredQuestions;
