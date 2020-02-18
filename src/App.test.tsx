import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('renders div with init text', () => {
  const { getByText } = render(<App />);
  const text = getByText('Init');
  expect(text).toBeInTheDocument();
});
