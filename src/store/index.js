import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from  'redux-thunk';

import todoReducer from "./reducer/todo";

const store = createStore(combineReducers({todoReducer}), applyMiddleware(thunk));

export default store;