import React from 'react';

const CartSummary = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="cart-summary">
      <h2>Ollivanders Order</h2>
      <p data-testid="cart-count">Items in Trunk: {cart.length}</p>
      <p data-testid="total-price">Total Cost: {total} Galleons</p>
    </div>
  );
};

export default CartSummary;