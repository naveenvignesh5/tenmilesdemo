import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className="container-fluid">
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Container;
