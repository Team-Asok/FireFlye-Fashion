import React from 'react';
import PercentBar from './PercentBar.jsx'
import styled from 'styled-components'
// Helper fn. Find total stars of given review

const StyledTable = styled.table`
  vertical-align: middle;
  width:100%;
  border: 1px solid black;
  `;
const StyledTd = styled.td`
  width: 25%
  border: 1px solid black;
  `;

const findTotalStars = function(ratings) {
  let totalRatings = 0;
  for (var key in ratings) {
    totalRatings += parseInt(ratings[key])
  }
  return totalRatings;
}

class StarRating extends React.Component {
  constructor(props){
    super(props);
    this.totalStars = findTotalStars(this.props.metaData.ratings)
    this.starPercentage = this.starPercentage.bind(this);
  }


  // Gets percentage of total rounded to second decimal point

  starPercentage = (starRating) => {
    return ((parseInt(this.props.metaData.ratings[starRating]) / this.totalStars) * 100).toFixed(2);
  }


render() {
  return (
    <>
      <StyledTable id="star-rating-table">
        <tbody>
          <tr>
            <td>
              <button onClick={() => {this.props.filter(5)}}>5 stars</button>
            </td>
            <PercentBar percentage={this.starPercentage('5')} />
          </tr>
          <tr>
          <td>
              <button onClick={() => {this.props.filter(4)}}>4  stars</button>
            </td>
            <PercentBar percentage={this.starPercentage('4')} />
          </tr>
          <tr>
          <td>
              <button onClick={() => {this.props.filter(3)}}>3 stars</button>
            </td>
            <PercentBar percentage={this.starPercentage('3')} />
          </tr>
          <tr>
          <td>
              <button onClick={() => {this.props.filter(2)}}>2 stars</button>
            </td>
            <PercentBar percentage={this.starPercentage('2')} />
          </tr>
          <tr>
          <td>
              <button onClick={() => {this.props.filter(1)}}>1 star</button>
            </td>
            <PercentBar percentage={this.starPercentage('1')} />
          </tr>
        </tbody>
      </StyledTable>
        </>
        )
      }

  };


export  { StarRating, findTotalStars};
