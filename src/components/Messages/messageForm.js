import React, { Component } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react'

class messageForm extends Component {
  state = {
    messageinput: ''
  }

  handleChange = e => {
    this.setState ({
      messageinput: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert('Message submitted!')
    fetch(`http://localhost:3000/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      Accepts: "application/json"
      },
      body: JSON.stringify({
        messageinput: this.state.messageinput
      })
    })
    .then(response => response.json())
    .then(
    this.setState({
      messageinput: '',
    }))
  }

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Form.Field control={TextArea} value={this.state.messageinput}
         onChange={this.handleChange}
         label='New Message' placeholder='Type new message' />
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }

}

export default messageForm;
