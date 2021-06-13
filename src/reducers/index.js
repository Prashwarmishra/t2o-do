import { combineReducers } from 'redux';

import tasks from './tasks';
import auth from './auth';
import todos from './todos';

export default combineReducers({
  tasks,
  auth,
  todos,
});
