import React,{useState} from 'react'
import {
    Button,
    Form,
    FormCheck,
    FormControl,
    FormGroup,
    FormLabel,
    Modal,
    ModalBody,
  } from "react-bootstrap";
  import ModalHeader from "react-bootstrap/esm/ModalHeader";
  import {useConversations} from '../contexts/ConversationProvider'

import {useContacts} from '../contexts/ContactsProvider'

export default function NewConversationModal({closeModal}) {

    const {contacts} = useContacts();
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const {createConversation} = useConversations();


        function handleSubmit(e){
            e.preventDefault();
            createConversation(selectedContactIds);
            closeModal();
        }

    function handleCheckboxChange(contactId){
        setSelectedContactIds(prevSelectedContactIds=>{
            if(prevSelectedContactIds.includes(contactId)){
                return prevSelectedContactIds.filter(prevId=>{
                    return contactId!==prevId
                })
            }
            else
            {
                return[...prevSelectedContactIds,contactId];
            }
        })
    }
    return (
        <>
        <ModalHeader closeButton>Create new contact</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
           {contacts.map(contact=>(
                <FormGroup controlId={contact.id} key={contact.id}  >
                    <FormCheck
                        type='checkbox'
                        value={selectedContactIds.includes(contact.id)}
                        label={contact.name}
                        onChange={()=> handleCheckboxChange(contact.id)}
                    />
                </FormGroup>
           ))}
            <Button type="submit" className="mt-2">
              Create
            </Button>
          </Form>
        </ModalBody>
      </>
    )
}
