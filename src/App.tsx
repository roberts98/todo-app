import React from 'react';

import { TodosList, TodoForm, Layout } from './components';
import { TodoProvider } from './contexts';

function App() {
  return (
    <Layout>
      <TodoProvider>
        <TodosList />
        <TodoForm />
      </TodoProvider>
    </Layout>
  );
}

export default App;
