const sortReviews = (reviews, criteria) => {

  console.log(reviews);
  var sortByHelpful = (reviews) => {
    var compareFunction = (a, b) => {
      if (a.helpfulness < b.helpfulness) {
        return -1;
      }
      if (a.helpfulness > b.helpfulness) {
        return 1;
      }

      return 0;
    }
    return reviews.sort(compareFunction);
  }

  var sortByDate = (reviews) => {

  }

  if (criteria === 'helpful') {
    var sortedReviews = sortByHelpful(reviews);
    return sortedReviews;
  }
  if (criteria === 'relevance') {
    return reviews.sort();
  }

}

export default sortReviews;