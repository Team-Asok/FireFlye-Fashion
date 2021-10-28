import React from 'react';
import axios from 'axios';
import QandA from './QandA/QandA.jsx';
import RandR from './RandR/RandR.jsx';
import Overview from './Overview/Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      reviews: [],
      qAndA: [],
      displayedProduct: null,
    };
    this.getAllProducts = this.getAllProducts.bind(this);
    this.getProductQandA = this.getProductQandA.bind(this);
    this.getProductReviews = this.getProductReviews.bind(this);
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
            });
        });
      })
      .catch((err) => console.log(err));
  }
  /* Sends axios request to server at /reviews with parameter equal to the product id
  of current display product. Sets state of reviews equal to response.data
  -------------------------------------------------------------------------------- */

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
    const { reviews } = this.state;
    const { products } = this.state;
    const { qAndA } = this.state;
    return (
      <div id="index">
        <Overview products={{ products }} />
        <QandA qAndA={{ qAndA }} />
        <RandR reviews={{ reviews }} />
      </div>
    );
  }
}
export default App;
