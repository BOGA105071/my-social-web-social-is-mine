import React from 'react'
import './dialogs.css'
import { NavLink } from 'react-router-dom'
import DialogsItem from './dialogs_item/Dialogs_item'
import Message from './messages/Messages'
let messageText = React.createRef()
function Dialogs(props) {
    let newMessage = () => {
        props.sendMessage(messageText.current.value)
    }
    return (
        <div className='dialogs'>
           
            <div className='dialog'>
                {props.dialogNames.dialogData.map((e)=><DialogsItem name={e.name} id={e.id} />)}
                

            </div>
            <div className="messages"> 
                {props.messageItems.messageData.map((e)=><Message message={e.message} id={e.id}/> )}
           
            </div>
            <div className="code">
                <input ref={messageText} type="text" />
                <button onClick={newMessage}>Отправить</button>                
            </div>

        </div>
    )
}

export default Dialogs




