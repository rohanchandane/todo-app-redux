import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from  'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import todoReducer from "./reducer/todo";

const store = createStore(combineReducers({todoReducer}), composeWithDevTools(applyMiddleware(thunk)));

export default store;