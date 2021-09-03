import { compose, createStore } from 'redux';
import { contextReducer } from './reducers/context';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(contextReducer, composeEnhancers());
