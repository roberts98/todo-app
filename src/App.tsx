import React, { useState } from 'react';

import { TodosList, TodoForm } from './components';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(todo: Todo): void {
    setTodos([...todos, todo]);
  }

  return (
    <>
      <TodosList todos={todos} />
      <TodoForm onSubmit={handleSubmit} />
    </>
  );
}

export default App;
