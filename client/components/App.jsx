import React from 'react';
import axios from 'axios';
import QandA from './QandA/QandA.jsx';
import RandR from './RandR/RandR.jsx';
import Overview from './Overview/Overview.jsx';
import getMetaScore from './RandR/MetaData/getMetaScoreFn.js';
import { findTotalStars } from './RandR/MetaData/StarRatingGraph.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      reviews: [],
      qAndA: [],
      metaData: [],
      metaScore: 0,
      displayedProduct: null,
    };
    this.getAllProducts = this.getAllProducts.bind(this);
    this.getProductQandA = this.getProductQandA.bind(this);
    this.getProductReviews = this.getProductReviews.bind(this);
    this.getMetaData = this.getMetaData.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
  }

  /* Sends Axios get request to server to retrieve product data from Product API
-------------------------------------------------------------------------------- */

  getAllProducts() {
    axios.get('/products')
      .then((results) => {
        this.setState({ products: results.data }, () => {
          const index = Math.floor(Math.random() * this.state.products.length);
          this.setState({ displayedProduct: this.state.products[index] },
            () => {
              this.getProductQandA(this.state.displayedProduct.id);
              this.getProductReviews(this.state.displayedProduct.id);
              this.getMetaData(this.state.displayedProduct.id);
            });
        });
      })
      .catch((err) => console.log(err));
  }
  /* Sends axios request to server at /reviews with parameter equal to the product id
  of current display product. Sets state of reviews equal to response.data
  -------------------------------------------------------------------------------- */
  getMetaData(productID) {
    axios.get(`/reviews/meta/${productID}`)
    .then((results) => {
      var metaScore = getMetaScore(results.data.ratings, findTotalStars)
      console.log(metaScore);

      this.setState({metaData: results.data, metaScore: parseFloat(metaScore)})
    })
  }

  getProductReviews(productID) {
    axios.get(`/reviews/${productID}`)
      .then((results) => {
        this.setState({ reviews: results.data });
      });
  }

  getProductQandA(productID) {
    axios.get(`/qa/questions/${productID}`)
      .then((results) => {
        this.setState({ qAndA: results.data });
      });
  }

  render() {
    if (this.state.displayedProduct === null || this.state.products.length === 0 || this.state.reviews.length === 0 || this.state.metaData.length === 0 || this.state.qAndA.length === 0 ) {
      return null;
    }

    return (
      <div id="index">
        <Overview products={this.state.products} currentProd={this.state.displayedProduct} />
        <QandA qAndA={this.state.qAndA} getProductQandA={this.getProductQandA}/>
        <RandR getReviews={this.getAllProducts} reviews={this.state.reviews.results} metaData={this.state.metaData} />
      </div>
    );
    }
  }

export default App;
