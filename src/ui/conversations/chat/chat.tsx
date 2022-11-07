import React from "react";
import { StyleSheet } from "../../../types/style";

export const Chat = () => {
  return (
    <div style={styles.chat}>
      <h1 style={styles.recipientName}>Brandon</h1>
    </div>
  );
};

const styles: StyleSheet = {
  chat: {
    flex: 4,
    backgroundColor: "white",
    flexDirection: "column",
  },
  recipientName: {
    color: "#686868",
    fontSize: 24,
  },
};
