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
      currentSize: '',
      quantities: [],
    };
    this.parseInventory = this.parseInventory.bind(this);
    this.updateSizeSelection = this.updateSizeSelection.bind(this);
  }

  componentDidMount() {
    this.parseInventory(this.props.currentStyle.skus);
  }

  parseInventory(skus) {
    if (skus.null) {
      return;
    }

    let sizes = [];
    let quantities = [];
    let inventory = Object.values(skus);
    inventory.forEach((product) => {
      sizes.push(product.size);
      quantities.push(product.quantity);
    });

    this.setState({
      inventory: skus,
      sizes: sizes,
      quantities: quantities
    });
  }

  updateSizeSelection(size) {
    this.setState({currentSize: size.target.value});
  }

  render() {
    return (
      <div id="Cart">
        <DropDownSize sizes={this.state.sizes} select={this.updateSizeSelection} />
        <DropDownQuantity dataList={this.state.quantities} />
      </div>
    );
  }
}

export default Cart;
