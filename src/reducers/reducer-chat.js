import * as types from '../constants/actionTypes';

const initialState = {
  chats: {},
  isSending: false,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
  case types.ADD_CHAT_MESSAGE:
  case types.ADD_CHAT_REQUEST:
  case types.END_CHAT_REQUEST:
  case types.HIDE_CHAT_REQUEST:
  case types.REVEAL_CHAT_REQUEST:
  case types.CLOSE_CHAT_REQUEST:
    return Object.assign({}, state, { chats: payload });
  default:
    return state;
  }
};
