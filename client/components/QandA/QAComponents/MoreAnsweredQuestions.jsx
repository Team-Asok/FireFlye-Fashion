import React from 'react';

const MoreAnsweredQuestions = (props) => {
  if (!props.showAll) {
    return (
      <button onClick={props.onClick} id="more-answered-questions" type="button">MORE ANSWERED QUESTIONS</button>
    )
  } else {
    return (
      <button onClick={props.closeView} id="more-answered-questions" type="button">Hide some questions</button>
    )
  }

}

export default MoreAnsweredQuestions