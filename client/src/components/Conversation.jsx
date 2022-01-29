import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationProvider";

export default function Conversation() {
  const { conversations, selectConversationIndex } = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroupItem onClick={()=> selectConversationIndex(index)} action active={conversation.selected} key={index}>
          {conversation.recipients.map((r) => r.name).join(", ")}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
