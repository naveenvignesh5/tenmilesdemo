import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/Chat.css';

const ChatBubble = (props) => {
  const {
    text, timeStamp, showTimeStamp, userName, userType,
  } = props;
  return (
    <li className="chat-item">
      <div className={`msj${userType === 'executive' ? '-rta' : ''} macro`}>
        {userType === 'customer'
          && (
            <div className="avatar">
              <img alt="" className="img-circle thumbnail" src="http://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </div>)}
        <div className={`text text-${userType === 'customer' ? 'l' : 'r'}`}>
          <p>{userName}</p>
          <p>{text}</p>
          {showTimeStamp && <p>{`${timeStamp.getHours()} : ${timeStamp.getMinutes()}`}</p>}
        </div>
        {userType === 'executive'
          && (
            <div className="avatar thumbnailContainer">
              <img alt="" className="img-circle thumbnail" src="http://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </div>)}
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
