import React, { useState } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';

import { useTodoDispatch, Actions } from '../contexts';
import { InputGroup, Label, Input, Button } from './styled';
import { Modal } from './Modal';
import { CircleButton } from './styled/forms/CircleButton';
import { Colors } from '../contants/colors';

export function TodoForm() {
  const [title, setTitle] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useTodoDispatch();

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleModalClose() {
    setModalOpen(false);
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    const todo = {
      title,
      isDone: false,
      id: uuid()
    };
    setModalOpen(false);
    setTitle('');
    dispatch!({
      type: Actions.addTodo,
      payload: todo
    });
  }

  return (
    <>
      <Modal onClose={handleModalClose} isOpen={isModalOpen}>
        <Form data-testid="form" onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setTitle(e.target.value)
              }
              id="title"
              placeholder=" "
              required
            />
            <Label htmlFor="title">Title</Label>
          </InputGroup>
          <Button type="submit">Add todo</Button>
        </Form>
      </Modal>
      {!isModalOpen && (
        <Plus data-testid="plus-icon" onClick={handleModalOpen} />
      )}
    </>
  );
}

const Plus = styled(CircleButton)`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
`;

const Form = styled.form`
  padding: 40px;
  border: 2px solid #f2f2f2;
  background: ${Colors.white};
  text-align: center;
`;
