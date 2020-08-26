import React from 'react';

const BlockPost = ({ description, taste }) => {
  return (
    <div className = "block_product-block_post">
      <span className = "block_post-post_unactive">Чего сидишь? Порадуй котэ, <a href='/' className = "block_product-post_link">купи.</a></span>
      <span className = "block_post-post_active">{ description }</span>
      <span className = "block_post-post_disabled">Печалька, { taste } закончился.</span>
    </div>
  );
};

export default BlockPost;