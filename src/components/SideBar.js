import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Sidebar.css';

const SideBar = (props) => {
  const { title, listData } = props;
  return (
    <div className="col-md-4 sidebar">
      <div className="col-md-12">
        <div>{title}</div>
        <ul className="list-group">
          {listData.map(item => (
            <li className="list-group-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  title: PropTypes.string.isRequired,
  listData: PropTypes.array,
};

SideBar.defaultProps = {
  listData: [],
};

export default SideBar;
