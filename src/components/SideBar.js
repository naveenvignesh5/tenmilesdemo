import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Sidebar.css';

const SideBar = (props) => {
  const {
    title, listData, onPress, onItemPress
  } = props;
  return (
    <div className="sidebar">
      <li className="list-group-item active">{title}</li>
      {/* <ul className="list-group list-group-custom"> */}
      {listData.length > 0 && listData.map((item, index) => (
        <li
          onClick={() => onItemPress(item)}
          key={index.toString()}
          className="list-group-item"
        >
          {item}
        </li>
      ))}
      <li>
        <button className="btn btn-secondary" type="button" onClick={onPress}>Add Chat</button>
      </li>
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
