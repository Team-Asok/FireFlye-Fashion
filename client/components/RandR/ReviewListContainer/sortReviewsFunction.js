const sortReviews = (reviews, criteria) => {

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

  if (criteria === 'helpful') {
    reviews = sortByHelpful(reviews);
    console.log(reviews);
    return reviews;
  }
  if (criteria === 'relevance') {
    return reviews;
  }

}

export default sortReviews;