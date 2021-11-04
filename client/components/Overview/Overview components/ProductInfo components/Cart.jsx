import React from 'react';
import DropDownQuantity from '../../../GlobalComponents/DropDownMenu.jsx';
import DropDownSize from './DropDownSize.jsx';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inventory: [],
      sizes: [],
      quantities: [],
    };
    this.parseInventory = this.parseInventory.bind(this);
  }

  componentDidMount() {
    this.parseInventory(this.props.currentStyle.skus);
  }

  parseInventory(skus) {
    if (skus.null) {
      return;
    }
    this.setState({ inventory: skus });
  }

  render() {
    return (
      <div id="Cart">
        Cart
        <DropDownSize />
        {/* Testing DropDown */}
        <DropDownQuantity dataList={[1, 2, 3]} default={'2'} />
      </div>
    );
  }
}

export default Cart;
