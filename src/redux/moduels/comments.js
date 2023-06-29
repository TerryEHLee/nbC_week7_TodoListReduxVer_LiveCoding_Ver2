import shortid from 'shortid';

const initialState = [{}];

// 리듀서
const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COM':
      return [...state, action.payload];

    case 'DELETE_COM':
      return state.filter(comment => comment.id !== action.payload);

    case 'SWITCH_TODO':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default comments;
