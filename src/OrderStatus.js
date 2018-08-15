import React, { Component } from 'react';
import './OrderStatus.css';
import circle from './circle.svg';

class OrderStatus extends Component {
  render() {
    return (
      <div className="OrderStatus">
        <div>
          <div className="OrderStatus-title">Status</div>
          <div><img className="OrderStatus-circle" src={circle} alt="Circle icon"/> {this.props.data.status}</div>
        </div>
        <div>
          <div className="OrderStatus-title">Door</div>
          <div className="OrderStatus-name">{this.props.data.assignee.name}</div>
        </div>
        <div>
          <div className="OrderStatus-title">Om</div>
          <div>10:30 <span className="OrderStatus-date">{this.props.data.assignedAt}</span></div>
        </div>
      </div>
    );
  }
}

export default OrderStatus;
