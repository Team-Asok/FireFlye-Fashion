/* eslint-disable react/jsx-no-bind */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";
import axios from "axios";
import ReviewTile from "./ReviewTile";
import AddAReview from "./AddAReview";
import MoreReviews from "./MoreReviews";
import ReviewCount from "./ReviewCount";

const StyledDiv = styled.div``;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      view: "default",
      sort: "relevance",
    };
    this.renderView = this.renderView.bind(this);
    this.expandReviewsClickHandler = this.expandReviewsClickHandler.bind(this);
  }

  handleSortSubmit() {
    event.preventDefault();
    axios
      .get(`/reviews`, {
        params: { product_id: this.props.productId, sort: event.target.value },
      })
      .then((results) => {
        this.setState({
          reviews: results.data.results,
          sort: event.target.value,
        });
      });
  }

  expandReviewsClickHandler() {
    this.setState({ view: "all-reviews" });
  }

  renderView(view) {
    if (view === "default") {
      if (this.props.filteredReviews.length < this.state.reviews.length) {
        return (
          <>
            <ReviewTile review={this.props.filteredReviews[0]} />
            <ReviewTile review={this.props.filteredReviews[1]} />
          </>
        );
      }
      return (
        <>
          <ReviewTile review={this.state.reviews[0]} />
          <ReviewTile review={this.state.reviews[1]} />
        </>
      );
    }
    if (view === "all-reviews") {
      if (this.props.filteredReviews.length < this.state.reviews.length) {
        return this.props.filteredReviews.map((review) => (
          <ReviewTile key={review.id} review={review} />
        ));
      }
      return this.state.reviews.map((review) => (
        <ReviewTile key={review.id} review={review} />
      ));
    }
  }

  render() {
    return (
      <StyledDiv id="reviewlist">
        <ReviewCount
          default={this.state.sort}
          count={this.state.reviews.length}
          select={this.handleSortSubmit.bind(this)}
        />
        <div id="reviewListTilescontainer">
          {this.renderView(this.state.view)}
        </div>
        <div id="buttons-container">
          <AddAReview
            getProductReviews={this.props.getProductReviews}
            productId={this.props.productId}
            metaData={this.props.metaData}
          />
          <MoreReviews onClick={this.expandReviewsClickHandler} />
        </div>
      </StyledDiv>
    );
  }
}
export default ReviewList;
