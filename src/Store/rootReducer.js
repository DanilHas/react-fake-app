import { combineReducers } from 'redux';
import userListReducer from './userList-reducer';

const rootReducer = combineReducers({
  userList: userListReducer,
});

export default rootReducer;
