const sortQA = (questions) => {
  var sortByHelpful = (questions) => {
    var compareFunction = (a, b) => {
      if (a[1].helpfulness > b[1].helpfulness) {
        return -1;
      }
      if (a[1].helpfulness < b[1].helpfulness) {
        return 1;
      }

      return 0;
    }
    return questions.sort(compareFunction);
  }
}

export default sortQA