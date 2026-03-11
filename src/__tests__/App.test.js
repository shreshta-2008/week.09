import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('Integration: Cart updates when multiple items are added', () => {
  render(<App />);
  
  const buttons = screen.getAllByRole('button', { name: /add to trunk/i });
  
  // Interaction
  fireEvent.click(buttons[0]); // Elder Wand
  fireEvent.click(buttons[1]); // Nimbus 2000
  
  // Assertion
  const cartCount = screen.getByTestId('cart-count');
  const totalPrice = screen.getByTestId('total-price');
  
  expect(cartCount).toHaveTextContent('Items in Trunk: 2');
  expect(totalPrice).toHaveTextContent('Total Cost: 150 Galleons');
});