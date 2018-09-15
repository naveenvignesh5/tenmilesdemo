import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = (props) => {
  const {
    title, listData, onPress, onItemPress
  } = props;
  return (
    <div className="sidebar">
      <div className="title">{title}</div>
      <ul className="list-group align-content-start justify-content-start">
        {listData.length > 0 && listData.map((item, index) => (
          <li // eslint-disable-line
            onClick={() => onItemPress(item)}
            key={index.toString()}
            className="list-group-item item text"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="">
        <button onClick={onPress} className="btn ml-auto" type="button">
          Add Chat
          <FontAwesomeIcon className="icon" icon="plus" />
        </button>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  title: PropTypes.string.isRequired,
  listData: PropTypes.array,
  onPress: PropTypes.func,
  onItemPress: PropTypes.func,
};

SideBar.defaultProps = {
  listData: [],
  onPress: () => {},
  onItemPress: () => {},
};

export default SideBar;
