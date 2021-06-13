const API_ROOT = 'http://localhost:8000/api/v1';

export const APIURLs = {
  userLogin: () => `${API_ROOT}/users/create-session`,
  userSignup: () => `${API_ROOT}/users/create`,
};
