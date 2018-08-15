import React, { Component } from 'react';
import './OrderInformation.css';

class OrderInformation extends Component {
  render() {
    return (
      <div className="OrderInformation">
        <div>
          <span className="OrderInformation-title">Aaangevraagd om:</span>
          <span className="OrderInformation-details"> {this.props.data.placedAt}</span>
        </div>
        <div>
          <span className="OrderInformation-title">Email:</span>
          <span className="OrderInformation-details"> {this.props.data.customer.email}</span>
        </div>
        <div>
          <span className="OrderInformation-title">Telefoon:</span>
          <span className="OrderInformation-details"> {this.props.data.customer.phoneNumber}</span>
        </div>
      </div>
    );
  }
}

export default OrderInformation;
