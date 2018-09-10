import React from 'react';
import PropTypes from 'prop-types';

// Styles
import '../../styles/Chat.css';

// Components
import ChatHeader from './ChatHeader';
import ChatBubble from './ChatBubble';

const ChatContainer = (props) => {
  const { chatData } = props;
  return (
    <div>
      <div className="col-md-4">
        <ChatHeader title="Chat Header" />
      </div>
      <div className="panel-collapse collapse" id="collapseOne">
        <div className="panel-body">
          <ul className="chat">
            <ChatBubble />
          </ul>
        </div>
      </div>
    </div>
  );
};

ChatContainer.propTypes = {
  chatData: PropTypes.array.isRequired,
};

export default ChatContainer;
