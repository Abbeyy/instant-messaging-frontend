import React from "react";
import { Message } from "../../../../../types/messageHistory";
import { StyleSheet } from "../../../../../types/style";
import { ChatMessage } from "./chatMessage";

type Props = {
  messages: Message[];
};

export const ChatMessages = (props: Props) => {
  const { messages } = props;

  return (
    <div style={styles.chatHistory}>
      {messages?.map((message) => (
        <ChatMessage message={message} />
      ))}
    </div>
  );
};

const styles: StyleSheet = {
  chatHistory: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    marginBottom: 20,
    marginTop: 10,
  },
};
