import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Sidebar.css';

const SideBar = (props) => {
  const { title, listData } = props;
  return (
    <div className="col-md-4 sidebar">
      <div className="col">
        <div className="sidebarTitle">
          {title}
          <div className="mr-auto">
            <button type="button" className="btn btn-default">
              <span className="glyphicon glyphicon-addd">Add</span>
            </button>
          </div>
        </div>
        <ul className="list-group">
          {listData.map((item, index) => (
            <li key={index.toString()} className="list-group-item">{item}</li>
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
