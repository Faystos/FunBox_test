import React, { Component } from 'react';
import './main.css';

import BlockProduct from '../blockProduct/BlockProduct';

export default class App extends Component {

  state = {
    productsData: [
      {
        id: 1,
        taste: 'с фуа-гра',
        proposal: '10 порций мышь\u00A0в\u00A0подарок',
        description: 'Печень утки разварная с артишоками.',
        weight: '0,5',
        active: false,
        disabled: false
      },
      {
        id: 2,
        taste: 'с рыбой',
        proposal: '40 порций 2\u00A0мыши\u00A0в подарок',
        description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        weight: '2',
        active: true,
        disabled: false
      },
      {
        id: 3,
        taste: 'с курой',
        proposal: '100 порций 5\u00A0мышей в подарок заказчик доволен',
        description: 'Филе из цыплят с трюфелями в бульоне.',
        weight: '5',
        active: false,
        disabled: true
      }
    ]    
  }

  clickProduct = (id) => {
    this.setState(({ productsData }) => {
    const newProductsData = productsData.map(el =>{
      if (el.id === id) el.active = !el.active;
      return el;
    });

    return { productsData: newProductsData }    
    });    
  }

  render() {
    const { productsData } = this.state;
    return (
      <div className = 'main'>
        <h1 className = "main-title">Ты сегодня покормил кота?</h1>
        <BlockProduct
          product = { productsData }
          clickProduct = { this.clickProduct }
        />
      </div>
    );
  }
}
