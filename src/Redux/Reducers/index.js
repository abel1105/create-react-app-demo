import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';

const RootReducer = () =>
  combineReducers({
    users: UsersReducer
  });

export default RootReducer;