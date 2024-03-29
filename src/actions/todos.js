import { APIURLs } from '../helpers/urls';
import { getFormBody, getHeadersWithAuthToken } from '../helpers/utils';
import {
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODOS,
  UNCOMPLETE_TODO,
  UPDATE_TODOS,
} from './actionTypes';

export function getTodos(todos) {
  return {
    type: GET_TODOS,
    todos,
  };
}

export function fetchTodos() {
  return (dispatch) => {
    const url = APIURLs.getTodos();
    fetch(url, {
      method: 'GET',
      headers: getHeadersWithAuthToken(),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data: ', data);
        if (data.success) {
          dispatch(getTodos(data.data.tasks));
        }
      });
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODOS,
    todo,
  };
}

export function addTodo(description, dueDate) {
  return (dispatch) => {
    const url = APIURLs.addTodo();
    fetch(url, {
      method: 'POST',
      headers: getHeadersWithAuthToken(),
      body: getFormBody({ description, dueDate }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(updateTodo(data.data.task));
        }
      });
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    todoId,
  };
}

export function deleteSelectedTodo(todoId) {
  return (dispatch) => {
    const url = APIURLs.deleteTodo(todoId);
    fetch(url, {
      method: 'DELETE',
      headers: getHeadersWithAuthToken(),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(deleteTodo(todoId));
        }
      });
  };
}

export function completeTodo(todo) {
  return {
    type: COMPLETE_TODO,
    todo,
  };
}

export function uncompleteTodo(todo) {
  return {
    type: UNCOMPLETE_TODO,
    todo,
  };
}
