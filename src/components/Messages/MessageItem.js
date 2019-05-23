// import React, { Component } from 'react';
// import { Button, Dimmer, Header, Icon, Image, Segment, Message } from 'semantic-ui-react'
//
// export default class MessageItem extends Component {
//   state = {}
//
//   handleShow = () => this.setState({ active: true })
//   handleHide = () => this.setState({ active: false })
//   render() {
//   const { active } = this.state
//
//    return(
//      // <div>
//   //    <Message >
//   //    {props.id}
//   //    {props.messageinput}
//   //
//   //     <Checkbox slider right/>
//   // </Message >
//   <div>
//         <Dimmer.Dimmable as={Segment} dimmed={active}>
//           <Header as='h3'>{this.props.id}</Header>
//           <Header as='h4'>{this.props.messageinput}</Header>
//           <Dimmer active={active} onClickOutside={this.handleHide}>
//             <Header as='h2' icon inverted>
//               <Icon name='heart' />
//               Dimmed Message!
//             </Header>
//           </Dimmer>
//           <Button icon='plus' onClick={this.handleShow} floated='right'/>
//         </Dimmer.Dimmable>
//
//
//       </div>
//
//     // </div>
//    )
// }
// }
import React, { Component } from 'react';
import { Button, Card, Icon } from 'semantic-ui-react'

export default class MessageItem extends Component {
  state = {}
  handleClick = () => this.setState(prevState => ({ active: !prevState.active }))

  render() {
      const { active } = this.state
  return (
    <Card.Group centered>
      <Card>
        <Card.Content>
          <Card.Header>{this.props.id}</Card.Header>
        </Card.Content>
        <Card.Content extra>
        <Card.Description> {this.props.messageinput}</Card.Description>
        <Button toggle active={active} onClick={this.handleClick} floated='right'>
           +
         </Button>
        </Card.Content>
      </Card>
    </Card.Group>
)
}
}
