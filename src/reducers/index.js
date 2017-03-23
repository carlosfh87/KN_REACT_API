import { combineReducers } from 'redux';
import Users from './reducer_users';
import User from './reducer_user';

const rootReducer = combineReducers({
  users: Users,
  user: User
});

export default rootReducer;
