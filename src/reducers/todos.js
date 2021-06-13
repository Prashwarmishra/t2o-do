import { GET_TODOS } from '../actions/actionTypes';

export default function todos(state = [], action) {
  switch (action.type) {
    case GET_TODOS:
      return action.todos;
    default:
      return state;
  }
}
