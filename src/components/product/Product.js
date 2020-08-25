import React from 'react';
import './product.css';

const Product = ({product, click}) =>  {   

  const products = product.map(({taste, proposal, id, active, disabled}) => {
    
    let nameClassActive = active ? 'block_product-product--active' : 'block_product-product--unactive';      
    if (disabled) nameClassActive = 'block_product-product--disabled';

    const onHedlerProduct = (evt) => {
      const hendlerMouseleave = (e) => {        
        click(id);
        e.target.removeEventListener('mouseleave', hendlerMouseleave);       
      }  
      evt.target.addEventListener('mouseleave', hendlerMouseleave);       
    }
    
    return (
      <div className="block_product"
           key = { id }
           onClick = { onHedlerProduct  }
      >
        <div className =  { `block_product-product ${ nameClassActive } ` }>
          <p className = "product-title">Сказочное заморское яство</p>
          <h2 className = "product-brend">Нямушка</h2>
          <p className = "product-taste">{ taste }</p>
          <p className = "product-bonus">{ proposal }</p>
        </div>
        <span className = "block_product-post">Чего сидишь? Порадуй котэ, <a href='/' className="block_product-post_link">купи.</a></span>
      </div>
    );
  });

  return (
    <div className="main-block_product">
      { products }      
    </div>
  );
 }

export default Product;