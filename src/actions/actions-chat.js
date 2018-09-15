import loremIpusm from 'lorem-ipsum';
import * as types from '../constants/actionTypes';

const addMessage = chatPayload => ({
  type: types.ADD_CHAT_MESSAGE,
  payload: chatPayload,
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

const screenLimitException = () => ({
  type: types.CHAT_SCREEN_LIMIT_ERROR,
  error: {
    message: 'Maximum Number of Chat Windows Reached !!!',
  },
});

export const sendMessage = (message, chatId) => (dispatch) => {
  let chats = JSON.parse(sessionStorage.getItem('chats')) || {}; // eslint-disable-line no-undef
  chats[chatId].messages.push(message);
  sessionStorage.setItem('chats', JSON.stringify(chats)); // eslint-disable-line no-undef
  dispatch(addMessage(chats));
  setTimeout(() => {
    const botMessage = {
      text: loremIpusm({ count: 1, units: 'sentences', format: 'plain' }),
      timeStamp: new Date().toDateString(),
      userName: 'abc',
      userType: 'customer',
      showTimeStamp: true,
    };
    chats = JSON.parse(sessionStorage.getItem('chats')) || {}; // eslint-disable-line no-undef
    chats[chatId].messages.push(botMessage);
    sessionStorage.setItem('chats', JSON.stringify(chats)); // eslint-disable-line no-undef
    dispatch(addMessage(chats));
  }, 1000);
};

export const endChat = chatId => (dispatch) => {
  const chats = JSON.parse(sessionStorage.getItem('chats')) || {}; // eslint-disable-line no-undef
  chats[chatId].ended = true;
  sessionStorage.setItem('chats', JSON.stringify(chats)); // eslint-disable-line no-undef
  dispatch(endChatRequest(chats));
};

export const addNewChat = chatId => (dispatch) => {
  const chats = JSON.parse(sessionStorage.getItem('chats')) || {}; // eslint-disable-line no-undef

  const visibleChats = Object.values(chats).filter(chat => !chat.hidden);
  if (visibleChats.length > 3) {
    dispatch(screenLimitException());
    return;
  }

  chats[chatId] = {
    id: chatId,
    name: `Chat ${Object.keys(chats).length}`,
    messages: [],
    hidden: false,
    ended: false,
  };

  sessionStorage.setItem('chats', JSON.stringify(chats)); // eslint-disable-line no-undef

  dispatch(addChatRequest(chats));
};

export const hideChat = chatId => (dispatch) => {
  const chats = JSON.parse(sessionStorage.getItem('chats')) || {}; // eslint-disable-line no-undef
  chats[chatId].hidden = true;
  sessionStorage.setItem('chats', JSON.stringify(chats)); // eslint-disable-line no-undef
  dispatch(hideChatRequest(chats));
};

export const showChat = chatId => (dispatch) => {
  const chats = JSON.parse(sessionStorage.getItem('chats')) || {}; // eslint-disable-line no-undef
  chats[chatId].hidden = false;
  sessionStorage.setItem('chats', JSON.stringify(chats)); // eslint-disable-line no-undef
  dispatch(revealChatRequest(chats));
};

export const closeChat = chatId => (dispatch) => {
  const chats = JSON.parse(sessionStorage.getItem('chats')) || {}; // eslint-disable-line no-undef
  delete chats[chatId];
  sessionStorage.setItem('chats', JSON.stringify(chats)); // eslint-disable-line no-undef
  dispatch(closeChatRequest(chats));
};
