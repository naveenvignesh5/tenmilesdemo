import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/Chat.css';

const ChatBubble = (props) => {
  const {
    text, timeStamp, showTimeStamp, userName, userType,
  } = props;
  return (
    <li className={`left clearfix ${userType === 'customer'} ? 'customer' : ''`}>
      <span className="chat-img pull-left">
        <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" />
      </span>
      <div className="chat-body clearfix">
        <div className="header">
          <strong className="primary-font">{userName}</strong>
          {showTimeStamp
          && (
            <small className="pull-right text-muted">
              <span className="glyphicon glyphicon-time" />
              {timeStamp.getMinutes()}
            </small>)}
        </div>
        <p>
          {text}
        </p>
      </div>
    </li>
  );
};

ChatBubble.propTypes = {
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userType: PropTypes.oneOf(['customer', 'executive']),
  showTimeStamp: PropTypes.bool,
  timeStamp: PropTypes.string,
};

ChatBubble.defaultProps = {
  showTimeStamp: false,
  userType: 'customer',
  timeStamp: '',
};

export default ChatBubble;
