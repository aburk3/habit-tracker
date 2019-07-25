import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import habits from './reducers/habits';
import habitFormData from './reducers/habitFormData';

const reducers = combineReducers({
  habits: habits,
  habitFormData
});

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware))
);
