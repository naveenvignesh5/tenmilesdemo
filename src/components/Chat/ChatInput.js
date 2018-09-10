import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/Chat.css';

const ChatInput = (props) => {
  const { buttonText, placeholder } = props;
  return (
    <div className="panel-footer">
      <div className="input-group">
        <input id="btn-input" type="text" className="form-control input-sm chat_input" placeholder={placeholder} />
        <span className="input-group-btn">
          <button className="btn btn-primary btn-sm" id="btn-chat" type="button">
            <span className="glyphicon glyphicon-send" aria-hidden="true" />
            {buttonText}
          </button>
        </span>
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default ChatInput;
