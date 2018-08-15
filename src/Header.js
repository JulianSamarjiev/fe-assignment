import React, { Component } from 'react';
import './Header.css';
import arrowLeft from './left-arrow-chevron.svg';
import print from './print-white.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img className="Header-arrow-left" src={arrowLeft} alt="Left arrow" />
        <div className="Header-client">
          <div className="Header-client-name">{this.props.data.customer.name}</div>
          <div className="Header-client-number">{this.props.data.customer.id}</div>
        </div>
        <div className="Header-print-wrapper">
          <img className="Header-print" src={print} alt="Printer" />
        </div>
      </div>
    );
  }
}

export default Header;
