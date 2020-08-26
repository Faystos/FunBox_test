import React from 'react';

const Product = ({ taste, proposal, weight }) => {
  return (
    <div className =  "block_product-product">
      <div className = "product-block_title">
        <p className = "block_title-title">Сказочное заморское яство</p>
        <p className = "block_title-title_cancel">Котэ не одобряет?</p>
      </div>          
      <h2 className = "product-brend">Нямушка</h2>
      <p className = "product-taste">{ taste }</p>
      <p className = "product-bonus">{ proposal }</p>
      <div className = "product-weight">{ weight } <span className = "product-weight_unit">кг</span></div>
    </div>
  );
};

export default Product;