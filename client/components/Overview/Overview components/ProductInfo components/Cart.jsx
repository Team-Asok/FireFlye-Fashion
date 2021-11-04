import React from 'react';
import DropDownQuantity from '../../../GlobalComponents/DropDownMenu.jsx';
import DropDownSize from './DropDownSize.jsx';

const styling = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr',
  },
  size: {
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 2,
  },
  quantity: {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 2,
  },
  button: {
    gridRowStart: 2,
  },
};

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
      <div style={styling.container}>
        <div style={styling.size}>
          <DropDownSize sizes={this.state.sizes} select={this.updateSizeSelection} />
        </div>
        <div style={styling.quantity}>
          <DropDownQuantity dataList={this.state.quantities} />
        </div>
        <button type="button" style={styling.button}>ADD TO BAG</button>
      </div>
    );
  }
}

export default Cart;
