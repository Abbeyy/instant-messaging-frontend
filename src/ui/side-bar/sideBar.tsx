import { useAppSelector } from "../../hooks";
import { currentUserSelector } from "../../redux/selectors/currentUserSelector";
import React from "react";
import { StyleSheet } from "../../types/style";
import HouseIcon from "@mui/icons-material/House";
import MessageIcon from "@mui/icons-material/Message";

export const SideBar = () => {
  const currentUser = useAppSelector(currentUserSelector);

  return (
    <div style={styles.sideBar}>
      <h1 style={styles.name}>{`Hi ${currentUser.firstName}`}</h1>
      <div style={styles.iconRow}>
        <HouseIcon style={styles.icon} />
      </div>
      <MessageIcon style={styles.icon} />
    </div>
  );
};

const styles: StyleSheet = {
  icon: {
    color: "#98BAFF",
    backgroundColor: "white",
    padding: 4,
    margin: 8,
    width: 30,
    height: 30,
    borderRadius: 8,
  },
  iconRow: {
    flex: 1,
  },
  name: {
    color: "white",
    fontSize: 20,
    letterSpacing: 0.6,
  },
  sideBar: {
    flex: 1.5,
    backgroundColor: "#98BAFF",
    flexDirection: "column",
    padding: 8,
    textAlign: "center",
  },
};
