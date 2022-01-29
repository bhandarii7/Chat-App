import React, { useRef } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { useContacts } from "../contexts/ContactsProvider";

export default function NewContactmodal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();

  const { createContact } = useContacts();

  function handleSubmit(e) {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  }
  return (
    <>
      <ModalHeader closeButton>Create new contact</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Id</FormLabel>
            <FormControl type="text" ref={idRef} required></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormControl type="text" ref={nameRef} required></FormControl>
          </FormGroup>
          <Button type="submit" className="mt-2">
            Create
          </Button>
        </Form>
      </ModalBody>
    </>
  );
}
