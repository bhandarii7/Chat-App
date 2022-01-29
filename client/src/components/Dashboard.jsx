import React from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'
import { useConversations } from '../contexts/ConversationProvider'

export default function Dashboard(props) {

    const {selectedConversation} = useConversations();
   
    return (
        <div className="d-flex" style={{height:'100vh'}} >
            <Sidebar id={props.id} />
            { selectedConversation &&<OpenConversation/>}
        </div>
    )
}
 