import { combineReducers } from 'redux';

import chat from './reducer-chat';

const rootReducer = combineReducers({
  chat,
});

export default rootReducer;
