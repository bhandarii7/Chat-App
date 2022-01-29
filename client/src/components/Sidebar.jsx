import React,{useState} from 'react'
import { Tab,Nav, TabContainer, NavItem, NavLink, TabContent, TabPane, Button, Modal } from 'react-bootstrap'
import Contacts from './Contacts';
import Conversation from './Conversation';
import NewContactModal from './NewContactmodal'
import NewConversationModal from './NewConversationModal'

export default function Sidebar({id}) {
    const CONVERSATION_KEY = 'conversations';
    const CONTACTS_KEY = 'contacts';

    const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);

    const [modalOpen, setModalOpen] = useState(false);

    const conversationOpen = activeKey === CONVERSATION_KEY;

    function closeModal(){
        setModalOpen(false);
    }

    return (
        <div style={{width:'250px'}} className='d-flex flex-column' >
            <TabContainer activeKey={activeKey} onSelect={setActiveKey} >
                <Nav variant='tabs' className='justify-content-center' >
                    <NavItem>
                        <NavLink eventKey={CONVERSATION_KEY} >Conversation</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink eventKey={CONTACTS_KEY} >Contacts</NavLink>
                    </NavItem>
                </Nav>
                <TabContent className='border-end overflow-auto flex-grow-1'  >
                    <TabPane eventKey={CONVERSATION_KEY} >
                        <Conversation/>
                    </TabPane>
                    <TabPane eventKey={CONTACTS_KEY} >
                        <Contacts/>
                    </TabPane>
                </TabContent>
                <div className='p-2 border-top border-end small ' >
                    your Id : <span className='text-muted'  >{id}</span>
                </div>
                <Button onClick={()=> setModalOpen(true)} className='rounded-0' >
                    New {conversationOpen ? 'conversation':'contact'}
                </Button>
            </TabContainer>

            <Modal show={modalOpen} onHide={closeModal}  >
                {conversationOpen ? <NewConversationModal closeModal={closeModal} /> : <NewContactModal closeModal={closeModal} /> }
            </Modal>
        </div>
    )
}
