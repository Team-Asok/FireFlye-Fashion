const sortQA = (arr) => {
  var compareFunction = (a, b) => {
    if (a.helpfulness > b.helpfulness) {
      return -1;
    }
    if (a.helpfulness < b.helpfulness) {
      return 1;
    }
    return 0;
  };
  return arr.sort(compareFunction);
};

export default sortQA;
