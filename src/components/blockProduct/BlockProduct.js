import React from 'react';
import './blockProduct.css';
import Product from './product/Product';
import BlockPost from './blockPost/BlockPost';

const BlockProduct = ({ product, clickProduct }) => {

  const products = product.map(({ taste, proposal, description, id, active, disabled, weight }) => {
    
    let nameClassActive = active ? 'block_product--active' : 'block_product--unactive';
    if (disabled) nameClassActive = 'block_product--disabled';

    const onHedlerProduct = (evt) => {
      const target = evt.target;
      const targetParentNode = evt.target.parentNode;
      if (target.classList.contains('block_product-product') ||
          targetParentNode.classList.contains('block_product-product')) {
            target.addEventListener('mouseleave', hendlerMouseleave);
      }
      
      function hendlerMouseleave(e) {
        clickProduct(id);
        e.target.removeEventListener('mouseleave', hendlerMouseleave);
      }
    }
    
    return (
      <div className = { `block_product ${ nameClassActive }` }
           key = { id }
           onClick = { onHedlerProduct  }
      >
        <Product 
          taste = { taste }
          proposal = { proposal }
          weight = { weight }
        />
        <BlockPost 
          description = { description }
          taste = { taste }
          clickProduct = { clickProduct }
          id = { id }
        />        
      </div>
    );
  });

  return (
    <div className = "main-block_product">
      { products }      
    </div>
  );
 }

export default BlockProduct;