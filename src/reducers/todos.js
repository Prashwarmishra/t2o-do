import {
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODOS,
  UPDATE_TODOS,
} from '../actions/actionTypes';

const initialTodoState = {
  todosList: [],
  completed: [],
};

export default function todos(state = initialTodoState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todosList: action.todos.tasks,
      };
    case UPDATE_TODOS:
      return {
        ...state,
        todosList: [...state.todosList, action.todo],
      };
    case DELETE_TODO:
      const newList = state.todosList.filter(
        (todo) => todo._id !== action.todoId
      );
      return {
        ...state,
        todosList: newList,
      };
    case COMPLETE_TODO:
      return {
        ...state,
        completed: [action.todo, ...state.completed],
      };
    default:
      return state;
  }
}
