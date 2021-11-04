var sortByAnswers = (questions) => {
  var compareFunction = (a, b) => {
    if (Object.keys(a.answers).length > Object.keys(b.answers).length) {
      return -1;
    }
    if (Object.keys(a.answers).length < Object.keys(b.answers).length) {
      return 1;
    }
    return 0;
  }
  return questions.sort(compareFunction);
}
export default sortByAnswers