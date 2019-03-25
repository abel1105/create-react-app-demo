import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

import RootReducer from '../Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  thunkMiddleware,
];

let store = createStore(RootReducer(), composeEnhancers(applyMiddleware(...middleware)));

export default store;