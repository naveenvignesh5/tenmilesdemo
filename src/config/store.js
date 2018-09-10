import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// reducers
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  undefined, // initial state
  compose(applyMiddleware(thunkMiddleware)),
);

export default store;
