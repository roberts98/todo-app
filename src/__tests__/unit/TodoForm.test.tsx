import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { TodoForm } from '../../components';
import { Todo } from '../../types';
import { TodoProvider } from '../../contexts';

function renderComponent() {
  return render(<TodoForm />);
}

function renderWithProvider() {
  return render(
    <TodoProvider>
      <TodoForm />
    </TodoProvider>
  );
}

test('can open form after clicking plus icon button', () => {
  const { getByTestId } = renderComponent();
  const plusIcon = getByTestId('plus-icon');
  fireEvent.click(plusIcon);

  const form = getByTestId('form');

  expect(form).toBeInTheDocument();
});

test('form disappears after submitting with valid todo title', () => {
  const { getByTestId, getByLabelText } = renderWithProvider();
  const plusIcon = getByTestId('plus-icon');
  fireEvent.click(plusIcon);

  const form = getByTestId('form');
  const input = getByLabelText('Title');
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'Todo title' } });
  fireEvent.submit(form);

  expect(form).not.toBeInTheDocument();
});

test('form is visible after submitting with empty todo title', () => {
  const { getByTestId, getByLabelText } = renderWithProvider();
  const plusIcon = getByTestId('plus-icon');
  fireEvent.click(plusIcon);

  const form = getByTestId('form');
  const input = getByLabelText('Title');
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.submit(form, { preventDefault: jest.fn() });

  expect(form).toBeInTheDocument();
});
