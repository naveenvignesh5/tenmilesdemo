import * as types from '../constants/actionTypes';

const initialState = {
  chats: {},
  isSending: false,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
  case types.ADD_CHAT_MESSAGE:
    const { id, message } = payload; // eslint-disable-line
    const chatObj = { ...state.chats }; // eslint-disable-line

    if (chatObj[id] && chatObj[id].messages.length > 0) {
      chatObj[id] = {
        ...chatObj[id],
        messages: [
          ...(chatObj[id].messages || []),
          message,
        ]
      };
    } else {
      chatObj[id] = {
        ...chatObj[id],
        messages: [message],
      };
    }

    return Object.assign({}, state, { chats: chatObj, isSending: true });
  case types.ADD_CHAT_MESSAGE_SUCCESS:
    return Object.assign({}, state, { isSending: false });
  case types.ADD_CHAT_REQUEST:
    const newChatObj = { ...state.chats }; // eslint-disable-line
    newChatObj[payload.id] = {
      id: payload.id,
      name: `Chat ${Object.keys(newChatObj).length}`,
      messages: [],
      hidden: false,
      ended: false,
    };
    return Object.assign({}, state, { chats: newChatObj });
  case types.END_CHAT_REQUEST:
    const obj = { ...state.chats }; // eslint-disable-line
    obj[payload.id].ended = true;
    return Object.assign({}, state, { chats: obj });
  case types.HIDE_CHAT_REQUEST:
    const hideobj = { ...state.chats }; // eslint-disable-line
    hideobj[payload.id].hidden = true;
    return Object.assign({}, state, { chats: hideobj });
  case types.REVEAL_CHAT_REQUEST:
    const revealObj = { ...state.chats }; // eslint-disable-line
    revealObj[payload.id].hidden = false;
    return Object.assign({}, state, { chats: revealObj });
  case types.CLOSE_CHAT_REQUEST:
    const closeObj = { ...state.chats }; // eslint-disable-line
    delete closeObj[payload.id];
    return Object.assign({}, state, { chats: closeObj });
  default:
    return state;
  }
};
