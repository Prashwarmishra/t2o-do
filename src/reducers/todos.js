import { GET_TODOS, UPDATE_TODOS } from '../actions/actionTypes';

export default function todos(state = [], action) {
  switch (action.type) {
    case GET_TODOS:
      // console.log('////////////////', action.todos);
      return action.todos.tasks;
    case UPDATE_TODOS:
      return [action.todo, ...state];
    default:
      return state;
  }
}
