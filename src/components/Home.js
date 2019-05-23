import React, { Component } from 'react';
import logo from '../logo.png';
import { Header, Icon } from 'semantic-ui-react'

class Home extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Header as='h2'>
          <Icon name='settings' />
          <Header.Content>
            WonderQ
            <Header.Subheader>WonderQ is a broker that allows multiple producers to write to it, and multiple consumers to read from it. </Header.Subheader>
          </Header.Content>
        </Header>
      </div>
    );
  }

}

export default Home;
