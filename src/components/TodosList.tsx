import React from 'react';
import styled from 'styled-components';

import { SingleTodo } from './SingleTodo';
import { useTodoState } from '../contexts';
import { Colors } from '../contants/colors';

export function TodosList() {
  const todos = useTodoState();

  return (
    <>
      {todos.length ? (
        todos.map(todo => <SingleTodo key={todo.id} todo={todo} />)
      ) : (
        <Info>Gratz! No todos, go learn React!</Info>
      )}
    </>
  );
}

const Info = styled.div`
  font-size: 18px;
  font-style: italic;
  text-align: center;
  color: ${Colors.dark};
`;
