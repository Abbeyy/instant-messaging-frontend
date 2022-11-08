import { ChatHistory } from "./conversations/chat/chatHistory";
import { Conversations } from "./conversations/conversations";
import React from "react";
import { StyleSheet } from "../../types/style";

export const Messages = () => (
  <div style={styles.messages}>
    <Conversations />
    <ChatHistory recipientName="Brandon R." />
  </div>
);

const styles: StyleSheet = {
  messages: {
    display: "flex",
    flex: 7,
    backgroundColor: "white",
    flexDirection: "row",
  },
};
