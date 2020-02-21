import React from 'react';
import { render } from '@testing-library/react';

import { TodosList } from '../components';
import { Todo } from '../types';
import { TodoProvider } from '../contexts';

test('renders no items when no todos given', () => {
  const { getByText } = render(<TodosList />);
  const text = getByText('no items');
  expect(text).toBeInTheDocument();
});

test('renders todos when todos given', () => {
  // const todos: Todo[] = [
  //   {
  //     title: 'First todo',
  //     body: 'My first todo to do',
  //     isDone: false,
  //     id: '1'
  //   },
  //   {
  //     title: 'Second todo',
  //     body: 'I need to get some water',
  //     isDone: true,
  //     id: '2'
  //   }
  // ];
  // const { getByText } = render(
  //   <TodoProvider>
  //     <TodosList />
  //   </TodoProvider>
  // );
  // const firstTodo = getByText('First todo');
  // const secondTodo = getByText('Second todo');
  // expect(firstTodo).toBeInTheDocument();
  // expect(secondTodo).toBeInTheDocument();
});
