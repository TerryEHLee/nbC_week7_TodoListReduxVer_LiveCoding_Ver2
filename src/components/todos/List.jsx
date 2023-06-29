import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function List() {
  const todos = useSelector(state => {
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Working Lists</h1>
      {todos
        .filter(todo => todo.isDone === false)
        .map(todo => {
          return (
            <div key={todo.id}>
              {todo.title}
              <br />
              {todo.body}
              <button
                onClick={() => {
                  dispatch({
                    type: 'SWITCH_TODO',
                    payload: todo.id,
                  });
                }}>
                Complete
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: 'DELETE_TODO',
                    payload: todo.id,
                  });
                }}>
                Delete
              </button>
              <div>
                <Link to={`/${todo.id}`}>Detail</Link>
              </div>
            </div>
          );
        })}
      <h1>Done Lists</h1>
      {todos
        .filter(todo => todo.isDone === true)
        .map(todo => {
          return (
            <div key={todo.id}>
              {todo.title}
              <br />
              {todo.body}
              <button
                onClick={() => {
                  dispatch({
                    type: 'SWITCH_TODO',
                    payload: todo.id,
                  });
                }}>
                Back to work
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: 'DELETE_TODO',
                    payload: todo.id,
                  });
                }}>
                Delete
              </button>
              <div>
                <Link to={`/${todo.id}`}>Detail</Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default List;
