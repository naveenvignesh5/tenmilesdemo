import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Container from '../components/Container';
import SideBar from '../components/SideBar';

class Home extends Component {
  state = {}

  render() {
    return (
      <Container>
        <div className="row">
          <SideBar title="Ten Miles Demo" />
        </div>
      </Container>
    );
  }
}

export default Home;
