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
    chatsToggled: {},
  }

  componentDidMount = () => {
    sessionStorage.setItem('chats', null); // eslint-disable-line no-undef
  }

  componentDidUpdate = () => {

  };

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
    const chat = this.props.chats[key];
    if (this.state.currentText && !chat.ended) {
      const message = {
        text: this.state.currentText,
        timeStamp: new Date().toDateString(),
        userName: 'abc',
        userType: 'executive',
        showTimeStamp: true,
      };

      this.props.sendMessage(message, key);
      setTimeout(() => this.generateRoboMessage(key), 1000);
    }
  }

  handleActionPress = (action, index, key) => {
    if (index === 1) {
      const chat = this.props.chats[key];
      if (chat.ended) {
        Swal({
          title: 'Are you sure you want to discard chat ?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
        }).then((result) => {
          if (result.value) {
            this.props.closeChat(key);
          }
        });
      } else this.props.endChat(key);
    } else if (index === 0) this.props.hideChat(key);
  };

  handleChatToggle = (id, toggled) => {
    this.setState(prevState => ({
      chatsToggled: {
        ...prevState.chatsToggled,
        [id]: toggled,
      },
    }));
  }

  handleOnSideBarItemPress = (item) => {
    const { chats } = this.props;
    const chat = Object.values(chats).filter(o => o.name === item);
    if (chat.length === 1 && chat[0].hidden) {
      this.props.showChat(chat[0].id);
    }
  }

  handleChatContainerPress = (type, key) => {
    if (type === 'send') this.onSend(key);
    else if (type === 'close') {
      const chat = this.props.chats[key];
      if (chat.ended) {
        Swal({
          title: 'Are you sure you want to discard chat ?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
        }).then((result) => {
          if (result.value) {
            this.props.closeChat(key);
          }
        });
      } else this.props.endChat(key);
    } else if (type === 'hide') this.props.hideChat(key);
  }

  render() {
    const { chats } = this.props;
    const activeChats = Object.values(chats).map(item => item.name);
    const chatKeys = Object.keys(chats);
    return (
      <Container>
        <NavBar brandTitle="Ten Miles Chat Demo" />
        <Container>
          <div className="row">
            <div className="col-md-2 col-xs-3 sidebar-container">
              <SideBar
                title="Active Chats"
                listData={activeChats}
                onPress={() => this.addNewChat(uuidV4())}
                onItemPress={this.handleOnSideBarItemPress}
              />
            </div>
            <div className="col-md-10 col-xs-9">
              <div className="row chat-container">
                {chatKeys.map((key, index) => (
                  !chats[key].hidden
                  && (
                    <div className="col-md-2 col-xs-2 chat-wrapper" key={index.toString()}>
                      <ChatContainer
                        id={key}
                        name={activeChats[index]}
                        onInputChange={this.onTextInputChange}
                        onButtonPress={() => this.onSend(key)}
                        actions={['eye-slash', 'times']}
                        onActionPress={(...p) => this.handleActionPress(...p, key)}
                        chatData={chats[key] ? chats[key].messages : []}
                        chatEnded={chats[key].ended}
                      />
                    </div>)
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Container>
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
  closeChat: PropTypes.func.isRequired,
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
  error: state.chat.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
