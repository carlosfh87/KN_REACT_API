import { combineReducers } from 'redux';
import Users from './reducer_users';
import User from './reducer_user';
import Loader from './reducer_loader';

const rootReducer = combineReducers({
  users: Users,
  user: User,
  loader: Loader
});

export default rootReducer;
