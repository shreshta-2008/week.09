import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import '@testing-library/jest-dom';

const mockProduct = { id: 1, name: "Elder Wand", price: 100 };
const mockFn = jest.fn();

test('Unit: Renders wand details correctly', () => {
  render(<ProductCard product={mockProduct} addToCart={mockFn} />);
  expect(screen.getByText("Elder Wand")).toBeInTheDocument();
  expect(screen.getByText(/100 Galleons/i)).toBeInTheDocument();
});

test('Unit: Click "Add to Trunk" triggers function', () => {
  render(<ProductCard product={mockProduct} addToCart={mockFn} />);
  fireEvent.click(screen.getByRole('button'));
  expect(mockFn).toHaveBeenCalledWith(mockProduct);
});