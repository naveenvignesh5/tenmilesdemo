import React from 'react';
import PropTypes from 'prop-types';

// Styles
import '../../styles/Chat.css';

// Components
import ChatBubble from './ChatBubble';

const ChatContainer = (props) => {
  const {
    id,
    chatData = [],
    onInputChange,
    onButtonPress,
    chatEnded,
  } = props;
  const chatArea = chatData.length > 0
    ? (
      chatData.map((item, index) => (
        <ChatBubble
          key={index.toString()}
          {...item}
        />
      ))) : <div className="default">Not Messages yet</div>;

  return (
    <div className="wrap-collapsible">
      <input
        id={`input_${id}`}
        className="toggle"
        type="checkbox"
      />
      <label htmlFor={`input_${id}`} className="lbl-toggle">
        <div className="d-flex flex-row align-items-center">
          <p className="align-self-center">Hello World</p>
          <button type="button" className="btn btn-default ml-auto">X</button>
        </div>
      </label>
      <div className="collapsible-content">
        <div className="content-inner">
          <div className="chat-item-container d-flex flex-column align-items-center justify-content-center">
            {chatArea}
            {chatEnded && <div className="default">Chat has ended</div>}
            {/* <div className="align-self-start chat-bubble">
              <p className="username">ABC</p>
              <p className="text">Amet laborum occaecat excepteur eu duis.</p>
            </div>
            <div className="chat-bubble align-self-end executive">
              <p className="username">ABC</p>
              <p className="text">Esse culpa laboris esse sint cupidatat anim dolor minim.</p>
              <p className="timestamp">7.03 PM</p>
            </div>
            <div className="chat-bubble align-self-start">
              <p className="text">Laboris culpa tempor et Lorem excepteur elit esse aliquip occaecat ex exercitation cupidatat.</p>
            </div>
            <div className="chat-bubble align-self-end">
              <p className="text">Occaecat sint ea in dolore deserunt est irure minim ipsum cillum.</p>
              <p className="timestamp">7.05 PM</p>
            </div> */}
          </div>
        </div>
        <div className="d-flex flex-row chat-input-container align-items-center">
          <textarea className="input" placeholder="Enter a message" />
          <button className="btn btn-secondary" type="button">Send</button>
        </div>
      </div>
    </div>
  );
};

ChatContainer.propTypes = {
  id: PropTypes.string.isRequired,
  chatData: PropTypes.array.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  onChatToggle: PropTypes.func.isRequired,
  chatEnded: PropTypes.bool.isRequired,
};

export default ChatContainer;
