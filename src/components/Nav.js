import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item as= {Link} to='/home'
          name='home'
           active={activeItem === 'home'}
           onClick={this.handleItemClick} />
          <Menu.Item as= {Link} to='/messages'
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as= {Link} to='/newMessage'
            name='newMessage'
            active={activeItem === 'newMessage'}
            onClick={this.handleItemClick}
          />
          <Menu.Item href='https://github.com/maayankfir' target="_blank"
            name='github'
            active={activeItem === 'github'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}
