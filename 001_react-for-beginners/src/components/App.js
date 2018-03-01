import React, { Component } from 'react';
import Header from './Header/Header';
import Order from './Order/Order';
import Inventory from './Inventory/Inventory';

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Phil" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;