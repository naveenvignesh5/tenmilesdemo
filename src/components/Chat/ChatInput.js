import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatInput = (props) => {
  const {
    buttonText, placeholder, onInputChange, onButtonPress, buttonIcon,
  } = props;
  return (
    <div className="d-flex flex-row chat-input-container align-items-center">
      <textarea onChange={onInputChange} className="input" placeholder={placeholder} />
      <button onClick={onButtonPress} className="btn btn-secondary d-flex flex-row align-items-center" type="button">
        <FontAwesomeIcon icon={buttonIcon} />
      </button>
    </div>
  );
};

ChatInput.propTypes = {
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  buttonIcon: PropTypes.string,
};

ChatInput.defaultProps = {
  buttonIcon: 'location-arrow',
};

export default ChatInput;
