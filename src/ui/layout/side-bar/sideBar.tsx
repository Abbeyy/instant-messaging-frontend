import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  currentNavigationSelector,
  currentUserSelector,
} from "../../../redux/selectors/currentUserSelector";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "../../../types/style";
import { ICON_NAME } from "../../../types/ui/icon";
import { Icon } from "../../shared/icon";
import { SIDEBAR_MENU_OPTION } from "../../../types/redux/reducers/currentUserState";
import { setNavigationSideBar } from "../../../redux/thunks/setNavigationSideBar";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const currentUser = useAppSelector(currentUserSelector);
  const currentNavigation = useAppSelector(currentNavigationSelector);

  const [prevNavigation, setPrevNavigation] = useState<
    SIDEBAR_MENU_OPTION | undefined
  >(undefined);

  useEffect(() => {
    if (!prevNavigation) {
      setPrevNavigation(currentNavigation);
    }
  }, []);

  useEffect(() => {
    if (prevNavigation !== currentNavigation) {
      switch (currentNavigation) {
        case SIDEBAR_MENU_OPTION.HOME:
          navigate("/home");
          break;
        case SIDEBAR_MENU_OPTION.MESSAGES:
          navigate("/messages");
          break;
        default:
          break;
      }
    }
  }, [currentNavigation]);

  const onClickMessages = () => {
    setPrevNavigation(currentNavigation);
    dispatch(setNavigationSideBar(SIDEBAR_MENU_OPTION.MESSAGES));
  };

  const onClickHome = () => {
    setPrevNavigation(currentNavigation);
    dispatch(setNavigationSideBar(SIDEBAR_MENU_OPTION.HOME));
  };

  return (
    <div style={styles.sideBar}>
      <h1 style={styles.name}>{`Hi ${currentUser.firstName}`}</h1>

      <Icon
        active={currentNavigation === SIDEBAR_MENU_OPTION.MESSAGES}
        icon={ICON_NAME.MESSAGE}
        shadowColor="#189e74"
        onClick={onClickMessages}
      />
      <Icon
        active={currentNavigation === SIDEBAR_MENU_OPTION.HOME}
        icon={ICON_NAME.HOUSE}
        shadowColor="#189e74"
        onClick={onClickHome}
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
