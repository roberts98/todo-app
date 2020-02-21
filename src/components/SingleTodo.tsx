import React from 'react';
import styled from 'styled-components';

import { Todo } from '../types';
import { useTodoDispatch, Actions } from '../contexts';
import checked from '../assets/checked.svg';

export function SingleTodo({ todo }: { todo: Todo }) {
  const dispatch = useTodoDispatch();

  function handleRemove() {
    dispatch!({ type: Actions.removeTodo, payload: todo.id });
  }

  function handleToggleDone() {
    dispatch!({ type: Actions.toggleDone, payload: todo.id });
  }

  return (
    <Wrapper>
      <Title isDone={todo.isDone} onClick={handleRemove}>
        {todo.title}
      </Title>
      {todo.isDone ? (
        <Image onClick={handleToggleDone} src={checked} alt={todo.title} />
      ) : (
        <Circle onClick={handleToggleDone} />
      )}
    </Wrapper>
  );
}

interface TitleProps {
  isDone: boolean;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2<TitleProps>`
  color: ${(props: TitleProps) => (props.isDone ? '#999' : '#555')};
  font-weight: 400;
  font-size: 20px;

  &:hover {
    text-decoration: line-through;
  }
`;

const Image = styled.img`
  cursor: pointer;
`;

const Circle = styled.span`
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    border: 2px solid #aaa;
    border-radius: 50%;
  }
`;
