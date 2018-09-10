import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/Chat.css';

const ChatHeader = (props) => {
  const { title, isCollapsed } = props;
  return (
    <div className="panel-heading">
      <div className="panel-control">
        <div className="btn-group">
          <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#demo-chat-body">
            <i className="fa fa-chevron-down" />
          </button>
          <button type="button" className="btn btn-default" data-toggle="dropdown">
            <i className="glyphicon glyphicon-remove-circle" />
          </button>
        </div>
      </div>
      <h3 className="panel-title">{title}</h3>
    </div>
  );
};

ChatHeader.propTypes = {
  title: PropTypes.string.isRequired,
  isCollapsed: PropTypes.bool,
};

ChatHeader.defaultProps = {
  isCollapsed: false,
};

export default ChatHeader;
