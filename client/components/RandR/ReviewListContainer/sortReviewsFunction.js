import moment from 'moment';

const sortReviews = (reviews, criteria) => {
  var reviewsCopy = reviews.slice();

  var sortByHelpful = (reviews) => {
    var compareFunction = (a, b) => {
      if (a.helpfulness > b.helpfulness) {
        return -1;
      }
      if (a.helpfulness < b.helpfulness) {
        return 1;
      }

      return 0;
    }
    return reviews.sort(compareFunction);
  }

  var sortByDate = (reviews) => {

    var compareFunction = (a, b) => {

      // Date parsing functions ----------------------->
      var getYear = (string) => {
         var year = string.substring(0, 4)
         return parseInt(year, 10);
      }
      var getMonth = (string) => {
        var month = string.substring(5, 7)
        return parseInt(month, 10);
      }
      var getDay = (string) => {
        var day = string.substring(9, 11);
        return parseInt(day, 10);
      }

      // Comparison Conditionals
      if (getYear(a.date) > getYear(b.date)) {
        return -1
      }
      if (getMonth(a.date) > getMonth(b.date)) {
          return -1
      }
      if (getDay(a.date) > getDay(b.date)) {
        return -1
      }
      if (getYear(a.date) < getYear(b.date)) {
        return 1
      }
      if (getMonth(a.date) < getMonth(b.date)) {
          return 1
      }
      if (getDay(a.date) < getDay(b.date)) {
        return 1
      }

      return 0;
    }

  var sortedReviews = reviews.sort(compareFunction)

  return sortedReviews;
  }



  var sortByRelevance = (reviews) => {
    sortedByHelpfulness = reviews(sortByHelpful);

  }

  if (criteria === 'helpful') {
    var sortedReviews = sortByHelpful(reviewsCopy);
    return sortedReviews;
  }
  if (criteria === 'relevance') {
    return reviewsCopy;
  }
  if (criteria === 'newest') {
    var sortedReviews = sortByDate(reviewsCopy);
    return sortedReviews;
  }

}

export default sortReviews;