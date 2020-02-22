import React from 'react';
import { render } from '@testing-library/react';

import { TodosList } from '../../components';
import { Todo } from '../../types';
import { TodoStateContext } from '../../contexts';

function renderComponent(value: Todo[]) {
  return render(
    <TodoStateContext.Provider value={value}>
      <TodosList />
    </TodoStateContext.Provider>
  );
}

test('renders no items when no todos given', () => {
  const expectedText = 'Gratz! No todos, go learn React!';
  const { getByText } = renderComponent([]);
  const text = getByText(expectedText);
  expect(text).toBeInTheDocument();
});

test('renders todos when todos given', () => {
  const todos: Todo[] = [
    {
      title: 'First todo',
      isDone: false,
      id: '1'
    },
    {
      title: 'Second todo',
      isDone: true,
      id: '2'
    }
  ];
  const { getByText } = renderComponent(todos);
  const firstTodo = getByText('First todo');
  const secondTodo = getByText('Second todo');
  expect(firstTodo).toBeInTheDocument();
  expect(secondTodo).toBeInTheDocument();
});
