import React from 'react';

const MoreAnsweredQuestions = (props) => {
  if (!props.return) {
    return (
      <button onClick={props.onClick} id="load-questions" type="button">MORE ANSWERED QUESTIONS</button>
    )
  } else {
    return (
      <button onClick={props.closeView} id="load-questions" type="button">Hide some questions</button>
    )
  }
}

export default MoreAnsweredQuestions