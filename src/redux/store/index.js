import { createStore } from 'redux';
import rootReducers from '../reducers';

//createStore : khởi tạo lưu trữ tập
const store = createStore(rootReducers);

export default store;
