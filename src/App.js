import React, { Component } from 'react';
import Header from './Header';
import OrderInformation from './OrderInformation';
import OrderStatus from './OrderStatus';
import OrderItems from './OrderItems';
import data from './data.json';

class App extends Component {

  render() {
    return (
      <div>
        <Header data={data.data} />
        <OrderInformation data={data.data} />
        <OrderStatus data={data.data} />
        <OrderItems data={data.data}  />
      </div>
    );
  }
}

export default App;
