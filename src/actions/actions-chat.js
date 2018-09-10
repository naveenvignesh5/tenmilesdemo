import * as types from '../constants/actionTypes';

const addMessage = chatPayload => ({
  type: types.ADD_CHAT_MESSAGE,
  payload: chatPayload,
});

const addMessageSuccess = () => ({
  type: types.ADD_CHAT_MESSAGE_SUCCESS,
});

export const sendMessage = (message, chatId) => dispatch => { // eslint-disable-line
  const payload = {
    id: chatId,
    message,
  };

  const roboMessage = {
    text: 'dkjfkajfkjkdfj',
    timeStamp: new Date(),
    userName: 'abc',
    userType: 'customer',
    showTimeStamp: true,
  };

  dispatch(addMessage(payload));
  dispatch(addMessageSuccess());
  dispatch(addMessage(roboMessage));
  dispatch(addMessageSuccess());
};
