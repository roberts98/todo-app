import React, { useState } from 'react';

import { Todo } from '../types';

interface IProps {
  onSubmit: (todo: Todo) => void;
}

export function TodoForm({ onSubmit }: IProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    onSubmit({
      title,
      body,
      isDone: false
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setTitle(e.target.value)
        }
        id="title"
      />
      <label htmlFor="body">Body</label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setBody(e.target.value)
        }
        value={body}
        id="body"
      />
      <button type="submit">Add todo</button>
    </form>
  );
}
