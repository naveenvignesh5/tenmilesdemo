import * as types from '../constants/actionTypes';

const initialState = {
  chats: {},
  error: {},
};

export default (state = initialState, action) => {
  const { payload, type, error } = action;
  switch (type) {
  case types.ADD_CHAT_MESSAGE:
  case types.ADD_CHAT_REQUEST:
  case types.END_CHAT_REQUEST:
  case types.HIDE_CHAT_REQUEST:
  case types.REVEAL_CHAT_REQUEST:
  case types.CLOSE_CHAT_REQUEST:
    return Object.assign({}, state, { chats: payload, error: {} });
  case types.CHAT_SCREEN_LIMIT_ERROR:
    return Object.assign({}, state, { error });
  default:
    return state;
  }
};
