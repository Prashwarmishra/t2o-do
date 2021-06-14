import {
  AUTHENTICATE_USER,
  CLEAR_AUTH,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOG_OUT,
  SIGNUP_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  success: null,
  error: null,
  inProgress: false,
  isLoggedin: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
    case SIGNUP_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        error: null,
        inProgress: false,
        isLoggedin: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        success: action.success,
        error: null,
        inProgress: false,
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.error,
        inProgress: false,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        error: null,
        success: null,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };
    case CLEAR_AUTH:
      return {
        ...state,
        success: null,
        error: null,
      };
    default:
      return state;
  }
}
