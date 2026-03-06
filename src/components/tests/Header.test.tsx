import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders welcome message in header', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Welcome to New App/i);
  expect(headerElement).toBeInTheDocument();
});
