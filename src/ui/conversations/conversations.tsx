import React from "react";
import { StyleSheet } from "../../types/style";

export const Conversations = () => {
  return (
    <div style={styles.conversations}>
      <h1 style={styles.title}>Conversations</h1>
    </div>
  );
};

const styles: StyleSheet = {
  conversations: {
    flex: 3,
    backgroundColor: "white",
    flexDirection: "column",
  },
  title: {
    color: "#686868",
    fontSize: 28,
  },
};
