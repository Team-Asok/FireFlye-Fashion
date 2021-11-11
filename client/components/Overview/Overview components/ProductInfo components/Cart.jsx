import React from 'react';
import DropDownQuantity from '../../../GlobalComponents/DropDownMenu.jsx';
import DropDownSize from './DropDownSize.jsx';

const styling = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
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
      sizes: [],
      quantities: [],
      currentStyle: '',
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
      // Handle duplicate XL entry
      if (product.size === 'XL' && sizes.includes(product.size)) {
        product.size = 'XXL';
        currentSize = 'XXL';
      }

      sizes.push(product.size);

      // Fill quantities based on selected size. Max 15
      if (currentSize === product.size && this.state.currentStyle.length > 0) {
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
      sizes: sizes,
      quantities: quantities,
    });
  }

  // Pass selected style into parse to render correct quantities
  updateSizeSelection(size) {
    this.setState({ currentStyle: size.target.value }, () => {
      this.parseInventory(this.props.currentStyle.skus, size.target.value);
    });
  }

  render() {
    return (
      <div style={styling.container} id="Cart">
        <div style={styling.size}>
          <DropDownSize sizes={this.state.sizes} select={this.updateSizeSelection} />
        </div>
        <div style={styling.quantity}>
          <DropDownQuantity dataList={this.state.quantities} default={'1'} />
        </div>
        <button id="addCart" type="button" style={styling.button}>Add To Bag</button>
      </div>
    );
  }
}

export default Cart;
