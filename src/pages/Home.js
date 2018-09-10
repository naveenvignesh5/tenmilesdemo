import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
import { sendMessage } from '../actions/actions-chat';

// Components
import Container from '../components/Container';
import SideBar from '../components/SideBar';
import NavBar from '../components/Navbar';
import ChatContainer from '../components/Chat/ChatContainer';

class Home extends Component {
  state = {
    currentText: '',
  }

  onTextInputChange = (event) => {
    this.setState({
      currentText: event.target.value,
    });
  }

  onSend = () => {
    if (this.state.currentText) {
      const message = {
        text: this.state.currentText,
        timeStamp: new Date(),
        userName: 'abc',
        userType: 'executive',
        showTimeStamp: true,
      };

      this.props.sendMessage(message, '111');
    }
  }

  render() {
    return (
      <div className="home-container">
        <NavBar brandTitle="Ten Miles Chat Demo" />
        <Container>
          <div className="row">
            <SideBar
              title="Active Chats"
              listData={['Chat 1', 'Chat 2']}
            />
            <div className="col-md-8">
              <div className="col-md-6 col-md-offset-6 frame">
                <ChatContainer
                  onInputChange={this.onTextInputChange}
                  onButtonPress={this.onSend}
                  chatData={this.props.chats['111']}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  chats: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  sendMessage,
}, dispatch);

const mapStateToProps = state => ({
  chats: state.chat.chats,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
