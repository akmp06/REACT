
import { combineReducers } from 'redux';
import boardReducer from './board';
import listReducer from './list';
import taskReducer from './task';

const rootReducer = combineReducers({
  boards: boardReducer,
  lists: listReducer,
  tasks: taskReducer,
});

export default rootReducer;

