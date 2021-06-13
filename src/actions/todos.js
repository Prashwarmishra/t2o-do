import { APIURLs } from '../helpers/urls';
import { getHeadersWithAuthToken } from '../helpers/utils';
import { GET_TODOS } from './actionTypes';

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
