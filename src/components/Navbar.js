import React from 'react';
import PropTypes from 'prop-types';

import '../styles/navbar.css';

const NavBar = (props) => {
  const {
    brandTitle,
  } = props;
  return (
    <nav className="navbar navbar-default navbar-custom">
      <div className="container-fluid">
        <div className="navbar-header">
          <p className="navbar-brand">{brandTitle}</p>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  brandTitle: PropTypes.string.isRequired,
};

export default NavBar;
