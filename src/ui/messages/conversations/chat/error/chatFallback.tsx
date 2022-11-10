import { StyleSheet } from "../../../../../types/style";
import React from "react";

export const ChatFallback = () => (
  <div style={styles.fallback}>
    <p>Select a conversation to see it here in detail</p>
  </div>
);

const styles: StyleSheet = {
  fallback: {
    flex: 4,
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    padding: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
};
