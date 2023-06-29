import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Detail() {
  const [writer, setWriter] = useState('');
  const [text, setText] = useState('');
  const [pw, setPw] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);
  const comments = useSelector(state => state.comments);

  const todo = todos.filter(todo => todo.id === id)[0];
  const filteredComments = comments.filter(comment => {
    return comment.todoId === todo.id;
  });

  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <div>
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();

              dispatch({
                type: 'ADD_COM',
                payload: {
                  writer,
                  text,
                  todoId: todo.id,
                  pw,
                },
              });
            }}>
            <input
              writer="name"
              value={writer}
              onChange={e => {
                setWriter(e.target.value);
              }}
            />
            <input
              text="contents"
              value={text}
              onChange={e => {
                setText(e.target.value);
              }}
            />
            <input
              pw="pw"
              value={pw}
              onChange={e => {
                setPw(e.target.value);
              }}
            />
            <button>Leave a comment</button>
          </form>
        </div>
        <div>
          {filteredComments.map(comment => {
            return (
              <div key={comment?.id}>
                <p>{comment.writer}</p>
                <p>{comment.text}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: 'DELETE_COM',
                      payload: comment.id,
                    });
                  }}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <button onClick={() => navigate('/')}>To Main</button>
      </div>
    </div>
  );
}

export default Detail;
