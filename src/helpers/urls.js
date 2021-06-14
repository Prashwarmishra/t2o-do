const API_ROOT = 'http://localhost:8000/api/v1';
// const API_ROOT = 'https://my-todo-15.herokuapp.com/api/v1';

export const APIURLs = {
  userLogin: () => `${API_ROOT}/users/create-session`,
  userSignup: () => `${API_ROOT}/users/create`,
  getTodos: () => `${API_ROOT}/tasks/get-tasks`,
  addTodo: () => `${API_ROOT}/tasks/add-task`,
};
