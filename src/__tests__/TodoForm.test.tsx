import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';

import { TodoForm } from '../components';

test('submits todo form', () => {
  const onSubmit = jest.fn();
  const fakeTodo = {
    title: 'fake title',
    body: 'fake body'
  };
  const { container, getByLabelText } = render(
    <TodoForm onSubmit={onSubmit} />
  );

  const formNode = container.querySelector('form');
  const titleNode = getByLabelText('Title');
  const bodyNode = getByLabelText('Body');

  fireEvent.change(titleNode, { target: { value: fakeTodo.title } });
  fireEvent.change(bodyNode, { target: { value: fakeTodo.body } });

  Simulate.submit(formNode!);

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    ...fakeTodo,
    isDone: false
  });
});
