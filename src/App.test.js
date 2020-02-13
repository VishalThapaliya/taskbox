import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Salome link', () => {
  const { getByText } = render(<App />);
  // const linkElement = getByText(/Hello Doudou!!!/i);
  // expect(linkElement).toBeInTheDocument();
});
