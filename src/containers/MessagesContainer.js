import React, { Component } from 'react';
import MessagesList from '../components/Messages/MessagesList';

class MessagesContainer extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/messages')
    .then(response => response.json())
    .then(response => {
      this.setState({
        messages: response
      })
    })
  }

  render() {
      // console.log(this.state.messages);
    return (
      <div>
      <MessagesList messages={this.state.messages}/>
      </div>
    );
  }
}

export default MessagesContainer;
