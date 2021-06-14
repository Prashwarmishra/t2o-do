import {
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODOS,
  UNCOMPLETE_TODO,
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
      const completedList = state.completed.filter(
        (todo) => todo._id !== action.todoId
      );
      return {
        completed: completedList,
        todosList: newList,
      };
    case COMPLETE_TODO:
      if (state.completed.includes(action.todo)) {
        return state;
      }
      return {
        ...state,
        completed: [action.todo, ...state.completed],
      };
    case UNCOMPLETE_TODO:
      const newCompletedList = state.completed.filter(
        (todo) => todo._id !== action.todo._id
      );
      return {
        ...state,
        completed: newCompletedList,
      };
    default:
      return state;
  }
}
