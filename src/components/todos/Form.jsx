import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

function Form() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        dispatch({
          type: 'ADD_TODO',
          payload: {
            id: shortid.generate(),
            title,
            body,
            isDone: false,
          },
        });

        setTitle('');
        setBody('');
      }}>
      <div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          name="body"
          value={body}
          onChange={e => {
            setBody(e.target.value);
          }}
        />
        <button>add!!</button>
      </div>
    </form>
  );
}

export default Form;
