import React from 'react';
import PropTypes from 'prop-types';

// Styles
import '../../styles/Chat.css';

// Components
import ChatBubble from './ChatBubble';

const ChatContainer = (props) => {
  const {
    chatData = [],
    onInputChange,
    onButtonPress,
  } = props;
  const chatArea = chatData.length > 0
    ? (
      chatData.map((item, index) => (
        <ChatBubble
          key={index.toString()}
          {...item}
          showTimeStamp={item.userType === 'executive'}
        />
      ))) : <div>Not Messages yet</div>;

  return (
    <div id="#chatBox">
      <ul className="chat-list">
        {chatArea}
      </ul>
      <div className="msj-rta macro chat-text-input">
        <div className="text text-r">
          <input onChange={onInputChange} className="mytext" placeholder="Type a message" />
        </div>
      </div>
      <button className="btn btn-primary" type="button" onClick={() => onButtonPress('send')}>Send</button>
      <button className="btn btn-danger" type="button" onClick={() => onButtonPress('close')}>Close</button>
      <button className="btn btn-danger" type="button" onClick={() => onButtonPress('hide')}>Hide Chat</button>
    </div>
  );
};

ChatContainer.propTypes = {
  chatData: PropTypes.array.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

export default ChatContainer;
