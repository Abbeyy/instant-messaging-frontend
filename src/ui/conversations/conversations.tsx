import React from "react";
import { StyleSheet } from "../../types/style";
import { ChatBubble } from "./chat/chatBubble";

export const Conversations = () => {
  return (
    <div style={styles.conversations}>
      <h1 style={styles.title}>Conversations</h1>
      <ChatBubble recipientName="Brandon R." />
      <ChatBubble recipientName="Jenny Walsh-Baxter" />
    </div>
  );
};

const styles: StyleSheet = {
  conversations: {
    flex: 3,
    display: "flex",
    backgroundColor: "#F4F4F4",
    flexDirection: "column",
    padding: 24,
    textAlign: "left",
  },
  title: {
    color: "#686868",
    fontSize: 20,
    marginBottom: 12,
  },
};

// "#20c994"
