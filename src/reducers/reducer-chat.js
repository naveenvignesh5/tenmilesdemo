import * as types from '../constants/actionTypes';

const initialState = {
  chats: {},
  isSending: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.ADD_CHAT_MESSAGE:
    const { id, message } = action.payload; // eslint-disable-line
    const chatObj = { ...state.chats }; // eslint-disable-line

    if (chatObj[id] && chatObj[id].length > 0) {
      chatObj[id] = [
        ...(chatObj[action.payload.id] || []),
        message,
      ];
    } else chatObj[id] = [message];

    return Object.assign({}, state, { chats: chatObj, isSending: true });
  case types.ADD_CHAT_MESSAGE_SUCCESS:
    return Object.assign({}, state, { isSending: false });
  default:
    return state;
  }
};
