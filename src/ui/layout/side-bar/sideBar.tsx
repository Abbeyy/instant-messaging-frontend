import { useAppSelector } from "../../../hooks";
import {
  currentNavigationSelector,
  currentUserSelector,
} from "../../../redux/selectors/currentUserSelector";
import React from "react";
import { StyleSheet } from "../../../types/style";
import { ICON_NAME } from "../../../types/ui/icon";
import { Icon } from "../../shared/icon";
import { SIDEBAR_MENU_OPTION } from "../../../types/redux/reducers/currentUserState";

export const SideBar = () => {
  const currentUser = useAppSelector(currentUserSelector);
  const currentNavigation = useAppSelector(currentNavigationSelector);

  return (
    <div style={styles.sideBar}>
      <h1 style={styles.name}>{`Hi ${currentUser.firstName}`}</h1>

      <Icon
        active={currentNavigation === SIDEBAR_MENU_OPTION.MESSAGES}
        icon={ICON_NAME.MESSAGE}
        shadowColor="#189e74"
      />
      <Icon
        active={currentNavigation === SIDEBAR_MENU_OPTION.HOME}
        icon={ICON_NAME.HOUSE}
        shadowColor="#189e74"
      />
    </div>
  );
};

const styles: StyleSheet = {
  icon: {
    color: "#20c994",
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
    backgroundColor: "#20c994",
    flexDirection: "column",
    padding: 24,
    textAlign: "center",
    alignItems: "center",
  },
};
