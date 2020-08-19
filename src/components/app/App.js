import React, { Component } from 'react';
import './main.css';

import Product from '../product/Product';

export default class App extends Component {

  render() {
    return (
      <div className = 'main'>
        <h1 class="main-title">Ты сегодня покормил кота?</h1>
        <Product />
      </div>
    );
  }
}
