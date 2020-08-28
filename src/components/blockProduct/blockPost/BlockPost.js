import React from 'react';

const BlockPost = ({ description, taste, clickProduct, id }) => {

  const onHendlerLink = evt => {
    evt.preventDefault();
    clickProduct(id)
  }
  
  return (
    <div className = "block_product-block_post">
      <span className = "block_post-post_unactive">Чего сидишь? Порадуй котэ,
       <a href='/'
        className = "block_product-post_link"
        onClick = { onHendlerLink }
       >
          купи.
        </a>
      </span>
      <span className = "block_post-post_active">{ description }</span>
      <span className = "block_post-post_disabled">Печалька, { taste } закончился.</span>
    </div>
  );
};

export default BlockPost;