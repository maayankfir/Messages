import React from 'react';

import Nav from './components/Nav'
import Home from './components/Home'
import messageForm from './components/Messages/messageForm'
import MessagesContainer from './containers/MessagesContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {

  return (
    <Router>
      <Nav />
      <Route path="/home" component={Home}  />
      <Route path="/messages" component={MessagesContainer}  />
      <Route path="/newMessage" component={messageForm}  />
    </Router>
  );
}

export default App;
