import React from 'react';
import MessageItem from './MessageItem'

 const MessagesList = (props) => {

    return(
        <div>
          {props.messages.map(item => (
            <MessageItem key={item.id} id={item.id} isactive={item.isactive}
              messageinput={item.messageinput}/>
          )) }
        </div>
      )
}
export default MessagesList
