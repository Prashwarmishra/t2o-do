import { DELETE_TODO, GET_TODOS, UPDATE_TODOS } from '../actions/actionTypes';

export default function todos(state = [], action) {
  switch (action.type) {
    case GET_TODOS:
      return action.todos.tasks;
    case UPDATE_TODOS:
      return [action.todo, ...state];
    case DELETE_TODO:
      const newList = state.filter((todo) => todo._id !== action.todoId);
      return newList;
    default:
      return state;
  }
}
