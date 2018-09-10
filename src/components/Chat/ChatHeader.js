import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/Chat.css';

const ChatHeader = (props) => {
  const { title, isCollapsed } = props;
  return (
    <div className="panel-heading" id="accordion">
      <span className="glyphicon glyphicon-comment" />
      {title}
      <div className="btn-group pull-right">
        <a type="button" className="btn btn-default btn-xs" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
          <span className={`glyphicon ${isCollapsed ? 'glyphicon-chevron-down' : 'glyphicon-chevron-up'}`} />
        </a>
      </div>
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
