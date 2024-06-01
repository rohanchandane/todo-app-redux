import { createStore, combineReducers } from 'redux';

import todoReducer from "./reducer/todo";

const store = createStore(combineReducers({todoReducer}));

export default store;