import * as types from '../constants/actionTypes';

const addMessage = chatPayload => ({
  type: types.ADD_CHAT_MESSAGE,
  payload: chatPayload,
});

const addMessageSuccess = () => ({
  type: types.ADD_CHAT_MESSAGE_SUCCESS,
});

const endChatRequest = payload => ({
  type: types.END_CHAT_REQUEST,
  payload,
});

const addChatRequest = payload => ({
  type: types.ADD_CHAT_REQUEST,
  payload,
});

const hideChatRequest = payload => ({
  type: types.HIDE_CHAT_REQUEST,
  payload,
});

const revealChatRequest = payload => ({
  type: types.REVEAL_CHAT_REQUEST,
  payload,
});

const closeChatRequest = payload => ({
  type: types.CLOSE_CHAT_REQUEST,
  payload,
});

export const sendMessage = (message, chatId) => (dispatch) => {
  const payload = {
    id: chatId,
    message,
  };

  dispatch(addMessage(payload));
  dispatch(addMessageSuccess());
};

export const endChat = chatId => (dispatch) => {
  const payload = {
    id: chatId,
  };
  dispatch(endChatRequest(payload));
};

export const addNewChat = chatId => (dispatch) => {
  const payload = {
    id: chatId,
  };
  dispatch(addChatRequest(payload));
};

export const hideChat = chatId => (dispatch) => {
  const payload = {
    id: chatId,
  };
  dispatch(hideChatRequest(payload));
};

export const showChat = chatId => (dispatch) => {
  const payload = {
    id: chatId,
  };
  dispatch(revealChatRequest(payload));
};

export const closeChat = chatId => (dispatch) => {
  const payload = {
    id: chatId,
  };
  dispatch(closeChatRequest(payload));
};
