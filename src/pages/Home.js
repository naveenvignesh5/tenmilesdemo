import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidV4 from 'uuid/v4';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

// actions
import {
  sendMessage, endChat, addNewChat, hideChat, showChat, closeChat,
} from '../actions/actions-chat';

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

  generateRoboMessage = (key) => {
    const roboMessage = {
      text: 'dkjfkajfkjkdfj',
      timeStamp: new Date(),
      userName: 'abc',
      userType: 'customer',
      showTimeStamp: true,
    };
    this.props.sendMessage(roboMessage, key);
  }

  addNewChat = (key) => {
    this.props.addNewChat(key);
    setTimeout(() => this.generateRoboMessage(key), 1000);
  }

  onSend = (key) => {
    if (this.state.currentText) {
      const message = {
        text: this.state.currentText,
        timeStamp: new Date(),
        userName: 'abc',
        userType: 'executive',
        showTimeStamp: true,
      };

      this.props.sendMessage(message, key);
      setTimeout(() => this.generateRoboMessage(key), 1000);
    }
  }

  handleOnSideBarItemPress = (item) => {
    const { chats } = this.props;
    const chat = Object.values(chats).filter(o => o.name === item);
    if (chat.length === 1 && chat[0].hidden) {
      // console.log(chat[0]);
      this.props.showChat(chat[0].id);
    }
  }

  handleChatContainerPress = (type, key) => {
    if (type === 'send') this.onSend(key);
    else if (type === 'close') this.props.endChat(key);
    else if (type === 'hide') this.props.hideChat(key);
  }

  render() {
    const { chats } = this.props;
    const activeChats = Object.values(chats).map(item => item.name);
    const chatKeys = Object.keys(chats);
    return (
      <div className="home-container">
        <NavBar brandTitle="Ten Miles Chat Demo" />
        <Container>
          <div className="row">
            <div className="col-md-2">
              <SideBar
                title="Active Chats"
                listData={activeChats}
                onPress={() => this.addNewChat(uuidV4())}
                onItemPress={this.handleOnSideBarItemPress}
              />
            </div>
            <div className="col-md-10">
              <div className="row">
                {chatKeys.map(key => (
                  !chats[key].hidden
                  && (
                    <div className="col-md-4 col-md-offset-4 frame">
                      <ChatContainer
                        onInputChange={this.onTextInputChange}
                        onButtonPress={type => this.handleChatContainerPress(type, key)}
                        chatData={chats[key] ? chats[key].messages : []}
                      />
                    </div>)
                ))}
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
  endChat: PropTypes.func.isRequired,
  addNewChat: PropTypes.func.isRequired,
  hideChat: PropTypes.func.isRequired,
  showChat: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  sendMessage,
  endChat,
  addNewChat,
  hideChat,
  closeChat,
  showChat,
}, dispatch);

const mapStateToProps = state => ({
  chats: state.chat.chats,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
