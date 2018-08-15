import React, { Component } from 'react';
import './OrderItem.css';
import arrowRight from './right-arrow-chevron.svg';

class OrderItem extends Component {
  state = {
    status: this.props.item.status
  }

  handleClick = () => {
    this.setState({
      status: this.state.status === 'NEW' ? "RESERVED" : "NEW"
    });
  }

  render() {
    return (
      <div className="OrderItem">
        <div className={this.state.status === "NEW" ? "OrderItem-select" : "OrderItem-select selected"} onClick={this.handleClick}></div>
        <div>
          <img src={this.props.item.product.imageUrl} alt="Order item" />
        </div>
        <div>
          <div class="OrderItem-product-name">{this.props.item.product.name}</div>
          <div>{this.props.item.product.description}</div>
        </div>
        <div>
          <img className="OrderItem-arrow-right" src={arrowRight} alt="Right arrow" />
        </div>
      </div>
    );
  }
}

export default OrderItem;
