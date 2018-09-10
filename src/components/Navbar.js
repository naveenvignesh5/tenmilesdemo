import React from 'react';
import PropTypes from 'prop-types';

import '../styles/navbar.css';

const NavBar = (props) => {
  const {
    brandTitle,
  } = props;
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <p className="navbar-brand brandtitle" href="/">{brandTitle}</p>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  brandTitle: PropTypes.string.isRequired,
};

export default NavBar;
