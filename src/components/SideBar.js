import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Sidebar.css';

const SideBar = (props) => {
  const {
    title, listData, onPress, onItemPress
  } = props;
  return (
    <div className="sidebar">
      <ul className="list-group align-content-start justify-content-start">
        <li className="list-group-item item text">Chat 1</li>
        <li className="list-group-item item text">Chat 2</li>
        <li className="list-group-item item text">Chat 3</li>
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
