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
      quantities: [],
    };
    this.parseInventory = this.parseInventory.bind(this);
    this.updateSizeSelection = this.updateSizeSelection.bind(this);
  }

  componentDidMount() {
    this.parseInventory(this.props.currentStyle.skus);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentStyle.style_id !== prevProps.currentStyle.style_id) {
      this.parseInventory(this.props.currentStyle.skus);
    }
  }

  parseInventory(skus, currentSize) {
    if (skus.null) {
      return;
    }

    let sizes = [];
    let quantities = [];

    let inventory = Object.values(skus);
    inventory.forEach((product) => {
      sizes.push(product.size);

      // Fill quantities based on selected size. Max 15
      if (currentSize === product.size) {
        let totalQuantity = product.quantity;
        if (totalQuantity > 15) {
          totalQuantity = 15;
        }
        while (totalQuantity > 0) {
          quantities.unshift(totalQuantity);
          totalQuantity--;
        }
      }
    });

    this.setState({
      inventory: skus,
      sizes: sizes,
      quantities: quantities,
    });
  }

  // Pass selected style into parse to render correct quantities
  updateSizeSelection(size) {
    this.parseInventory(this.props.currentStyle.skus, size.target.value);
  }

  render() {
    return (
      <div style={styling.container}>
        <div style={styling.size}>
          <DropDownSize sizes={this.state.sizes} select={this.updateSizeSelection} />
        </div>
        <div style={styling.quantity}>
          <DropDownQuantity dataList={this.state.quantities} default={'1'} />
        </div>
        <button type="button" style={styling.button}>ADD TO BAG</button>
      </div>
    );
  }
}

export default Cart;
