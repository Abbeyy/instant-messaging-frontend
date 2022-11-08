import { useAppSelector } from "../../hooks";
import { currentUserSelector } from "../../redux/selectors/currentUserSelector";
import React from "react";
import { StyleSheet } from "../../types/style";
import { ICON_NAME } from "../../types/ui/icon";
import { Icon } from "../shared/icon";

export const SideBar = () => {
  const currentUser = useAppSelector(currentUserSelector);

  return (
    <div style={styles.sideBar}>
      <h1 style={styles.name}>{`Hi ${currentUser.firstName}`}</h1>

      <Icon icon={ICON_NAME.HOUSE} shadowColor="#72a0fc" />
      <Icon icon={ICON_NAME.MESSAGE} shadowColor="#72a0fc" />
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
    display: "flex",
  },
  name: {
    color: "white",
    fontSize: 20,
    letterSpacing: 0.6,
    marginBottom: 12,
  },
  sideBar: {
    flex: 1,
    display: "flex",
    backgroundColor: "#98BAFF",
    flexDirection: "column",
    padding: 24,
    textAlign: "center",
    alignItems: "center",
  },
};
