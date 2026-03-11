import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="wand-card">
      <h3>{product.name}</h3>
      <p>{product.price} Galleons</p>
      <button onClick={() => addToCart(product)}>Add to Trunk</button>
    </div>
  );
};

export default ProductCard;