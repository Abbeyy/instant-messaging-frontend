import { useAppSelector } from "../../hooks";
import { currentUserSelector } from "../../redux/selectors/currentUserSelector";
import React from "react";
import { StyleSheet } from "../../types/style";

export const SideBar = () => {
  const currentUser = useAppSelector(currentUserSelector);

  return (
    <div style={styles.sideBar}>
      <h1 style={styles.name}>{`Hi, ${currentUser.firstName}!`}</h1>
    </div>
  );
};

const styles: StyleSheet = {
  name: {
    color: "white",
    fontSize: 20,
    letterSpacing: 0.6,
  },
  sideBar: {
    flex: 1,
    backgroundColor: "#98BAFF",
    flexDirection: "column",
    padding: 10,
  },
};
