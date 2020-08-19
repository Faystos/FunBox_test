import React, { Component } from 'react';
import './product.css';

export default class Product extends Component {

  render () {
    return (
    <div class="main-block_product">

      <div class="block_product">
        <div class="block_product-product block_product-product--unactive">
          <p class="product-title">Сказочное заморское яство</p>
          <h2 class="product-brend">Нямушка</h2>
          <p class="product-taste">с фуа-гра</p>
          <p class="product-bonus">10 порций мышь{'\u00a0'}в{'\u00a0'}подарок</p>
        </div>
        <span class="block_product-post">Чего сидишь? Порадуй котэ, <a href='/' class="block_product-post_link">купи.</a></span>
      </div>

      <div class="block_product">
        <div class="block_product-product block_product-product--active">
          <p class="product-title">Сказочное заморское яство</p>
          <h2 class="product-brend">Нямушка</h2>
          <p class="product-taste">с рыбой</p>
          <p class="product-bonus">40 порций 2{'\u00a0'}мыши{'\u00a0'}в подарок</p>
        </div>
        <span class="block_product-post">Головы щучьи с чесноком да свежайшая сёмгушка.</span>
      </div>

      <div class="block_product">
        <div class="block_product-product block_product-product--disabled">
          <p class="product-title">Сказочное заморское яство</p>
          <h2 class="product-brend">Нямушка</h2>
          <p class="product-taste">с курой</p>
          <p class="product-bonus">100 порций 5{'\u00a0'}мышей в подарок заказчик доволен</p>
        </div>
        <span class="block_product-post block_product-post--disabled">Печалька, с курой закончился.</span>
      </div>      
    </div>
    );
  }
}