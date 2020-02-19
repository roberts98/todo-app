import React from 'react';

import { Todo } from '../types';

export function TodosList({ todos }: { todos: Todo[] }) {
  return (
    <>
      {todos.length
        ? todos.map(todo => <div key={todo.title}>{todo.title}</div>)
        : 'no items '}
    </>
  );
}
