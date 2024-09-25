import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import randomReducer from './randomReducer';

const rootReducers = combineReducers({
  counter: counterReducer,
  random: randomReducer,
});

export default rootReducers;
