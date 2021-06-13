import { APIURLs } from '../helpers/urls';
import {
  getFormBody,
  getHeaders,
  setAuthTokenInLocalStorage,
} from '../helpers/utils';
import {
  AUTHENTICATE_USER,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
} from './actionTypes';

export function loginStart() {
  return {
    type: LOGIN_START,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export function userLogin(email, password) {
  return (dispatch) => {
    dispatch(loginStart);
    const url = APIURLs.userLogin();
    fetch(url, {
      method: 'POST',
      headers: getHeaders(),
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('LOGIN DATA:', data);
        if (data.success) {
          setAuthTokenInLocalStorage(data.data.token);
          return dispatch(loginSuccess(data.data.user));
        }
        return dispatch(loginFailure(data.message));
      });
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}
