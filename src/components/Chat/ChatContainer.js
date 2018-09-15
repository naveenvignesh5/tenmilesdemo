import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import '../../styles/Chat.css';

// Components
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';

class ChatContainer extends Component {
  state = {}

  render() {
    const {
      id,
      name,
      chatData = [],
      onInputChange,
      onButtonPress,
      onActionPress,
      actions,
      chatEnded,
    } = this.props;

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
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div>{name}</div>
            <div>
              {actions.map((action, index) => (
                <button
                  className="btn btn-default"
                  type="button"
                  key={index.toString()}
                  onClick={() => onActionPress(action, index)}
                >
                  <FontAwesomeIcon icon={action} />
                </button>
              ))}
            </div>
          </div>
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <div className="chat-item-container d-flex flex-column align-items-center justify-content-center">
              {chatArea}
              <div ref={(e) => { this.canvas = e; }} />
              {chatEnded && <div className="default">Chat has ended</div>}
            </div>
          </div>
          <ChatInput
            placeholder="Enter a message"
            onInputChange={onInputChange}
            onButtonPress={onButtonPress}
          />
        </div>
      </div>
    );
  }
}

ChatContainer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  chatData: PropTypes.array.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  chatEnded: PropTypes.bool.isRequired,
  onActionPress: PropTypes.func,
  actions: PropTypes.arrayOf(PropTypes.string),
};

ChatContainer.defaultProps = {
  onActionPress: () => {},
  actions: [],
};

export default ChatContainer;
