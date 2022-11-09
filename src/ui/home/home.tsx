import React from "react";
import { StyleSheet } from "../../types/style";

export const Home = () => (
  <div style={styles.home}>
    <h1>You're home.</h1>
  </div>
);

const styles: StyleSheet = {
  home: {
    display: "flex",
    flex: 7,
    backgroundColor: "white",
    flexDirection: "row",
  },
};
