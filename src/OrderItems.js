import React, { Component } from 'react';
import './OrderItems.css';
import OrderItem from './OrderItem';

class OrderItems extends Component {
  render() {
    return (
      <div className="OrderItems">
        {
          this.props.data.items.map(function(item) {
            return <OrderItem item={item}/>
          })
        }
      </div>
    );
  }
}

export default OrderItems;
