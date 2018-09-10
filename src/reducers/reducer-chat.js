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
    newChatObj[action.payload.id] = {
      id: action.payload.id,
      name: `Chat ${Object.keys(newChatObj).length}`,
      messages: [],
      hidden: false,
      ended: false,
    };
    return Object.assign({}, state, { chats: newChatObj });
  case types.END_CHAT_REQUEST:
    const obj = { ...state.chats }; // eslint-disable-line
    obj[action.payload.id].ended = true;
    return Object.assign({}, state, { chats: obj });
  case types.HIDE_CHAT_REQUEST:
    const hideobj = { ...state.chats }; // eslint-disable-line
    hideobj[action.payload.id].hidden = true;
    return Object.assign({}, state, { chats: hideobj });
  case types.REVEAL_CHAT_REQUEST:
    const revealObj = { ...state.chats }; // eslint-disable-line
    revealObj[action.payload.id].hidden = false;
    return Object.assign({}, state, { chats: revealObj });
  default:
    return state;
  }
};
