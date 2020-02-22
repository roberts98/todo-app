import React, { createContext, useReducer, useContext } from 'react';

import { Todo } from '../types';

export enum Actions {
  addTodo,
  removeTodo,
  toggleDone
}

type AddTodoAction = {
  type: Actions.addTodo;
  payload: Todo;
};

type RemoveTodoAction = {
  type: Actions.removeTodo;
  payload: string;
};

type ToggleDoneAction = {
  type: Actions.toggleDone;
  payload: string;
};

type Action = AddTodoAction | RemoveTodoAction | ToggleDoneAction;
type Dispatch = (action: Action) => void;
type State = Todo[];
type TodoProviderProps = { children: React.ReactNode };

const TodoStateContext = createContext<State>([]);
const TodoDispatchContext = createContext<Dispatch | undefined>(undefined);

function todoReducer(state: State, action: Action) {
  switch (action.type) {
    case Actions.addTodo: {
      const todos = [...state, action.payload];
      window.localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

    case Actions.removeTodo: {
      const todos = state.filter(todo => todo.id !== action.payload);
      window.localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

    case Actions.toggleDone: {
      const todos = state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone
          };
        }

        return todo;
      });
      window.localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

    default:
      return state;
  }
}

function TodoProvider({ children }: TodoProviderProps) {
  const [state, dispatch] = useReducer(
    todoReducer,
    JSON.parse(window.localStorage.getItem('todos')!) || []
  );

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

function useTodoState() {
  return useContext(TodoStateContext);
}

function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export { TodoProvider, TodoStateContext, useTodoState, useTodoDispatch };
