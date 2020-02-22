import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { TodoForm, TodosList } from '../../components';
import { TodoProvider } from '../../contexts';

function renderComponent() {
  return render(
    <TodoProvider>
      <TodosList />
      <TodoForm />
    </TodoProvider>
  );
}

test('can add new todo', async () => {
  const { getByTestId, getByText, getByLabelText } = renderComponent();

  /**
   * Elements on app load with empty todo list
   *
   * @plusIcon
   * @text
   */
  const plusIcon = getByTestId('plus-icon');
  const noTodosText = getByText(/Gratz/);

  expect(plusIcon).toBeInTheDocument();
  expect(noTodosText).toBeInTheDocument();

  fireEvent.click(plusIcon);

  /**
   * Elements after clicking plus icon which opens modal
   *
   * @input
   * @submitButton
   * @form
   */
  const submitButton = getByText('Add todo');
  const input = getByLabelText('Title');
  const form = getByTestId('form');

  expect(plusIcon).not.toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(form).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'Todo title ' } });
  fireEvent.submit(form);

  /**
   * Elements after submitting form
   *
   * @todoTitle
   */
  const todoTitle = getByText('Todo title');

  expect(todoTitle).toBeInTheDocument();
  expect(form).not.toBeInTheDocument();
  expect(getByTestId('plus-icon')).toBeInTheDocument();
});
