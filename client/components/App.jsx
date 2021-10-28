import React from 'react';
import axios from 'axios';
import QandA from './QandA/QandA';
import RandR from './RandR/RandR';
import Overview from './Overview/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      reviews: [],
      qAndA: [],
      displayedProduct: null,
    };
  }

  componentDidMount() {
    this.getAllProducts();
  }

  /* Sends Axios get request to server to retrieve product data from Product API
-------------------------------------------------------------------------------- */

  getAllProducts() {
    const { products } = this.state;
    const { displayedProduct } = this.state;
    axios.get('/products')
      .then((results) => {
        this.setState({ products: results.data });
      })
      .catch((err) => { console.log(`Error: ${err}`); })
      /* Creates random index and select product based on that index. Sets product to
      displayed Product */
      .then(() => {
        const index = Math.floor((Math.random() * { products }.length));
        this.setState({ displayedProduct: { products }[index] });
      })
      // Invokes getProductReviews passing in productId for displayed product
      .then(() => {
        this.getProductReviews({ displayedProduct }.id);
      })
      // Invokes getProductQandA passing in productId for displayed product
      .then(() => {
        this.getProductQandA({ displayedProduct }.id);
      });
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
      <div>
        <Overview products={{ products }} />
        <QandA qAndA={{ qAndA }} />
        <RandR reviews={{ reviews }} />
      </div>
    );
  }
}
export default App;
