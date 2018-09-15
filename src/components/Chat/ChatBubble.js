import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/Chat.css';

const ChatBubble = (props) => {
  const {
    text, timeStamp, userName, userType,
  } = props;
  return (
    <div className={`chat-bubble align-self-${userType === 'customer' ? 'start' : 'end'}`}>
      {userType === 'customer' && <p className="chat-bubble username">{userName}</p>}
      <p className="text">{text}</p>
      {userType === 'executive' && <p className="timestamp">{timeStamp}</p>}
    </div>
  );
};

ChatBubble.propTypes = {
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userType: PropTypes.oneOf(['customer', 'executive']),
  timeStamp: PropTypes.string,
};

ChatBubble.defaultProps = {
  userType: 'customer',
  timeStamp: '',
};

export default ChatBubble;
