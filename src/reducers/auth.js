import {
  AUTHENTICATE_USER,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  error: null,
  inProgress: false,
  isLoggedin: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
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
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        inProgress: false,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        error: {},
      };
    default:
      return state;
  }
}
