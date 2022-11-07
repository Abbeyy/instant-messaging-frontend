import React, { useEffect } from "react";
import { ClimbingBoxLoader, HashLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  currentUserFetchingSelector,
  currentUserSelector,
} from "./redux/selectors/currentUserSelector";
import { getCurrentUser } from "./redux/thunks/getCurrentUser";
import { StyleSheet } from "./types/style";
import { Chat } from "./ui/conversations/chat/chat";
import { Conversations } from "./ui/conversations/conversations";
import { SideBar } from "./ui/side-bar/sideBar";

export const AppRoot = () => {
  const dispatch = useAppDispatch();

  const fetchingUser = useAppSelector(currentUserFetchingSelector);
  const currentUser = useAppSelector(currentUserSelector);

  const loading = fetchingUser || !currentUser;

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  if (loading) {
    return (
      <div style={styles.loadingAppRoot}>
        <HashLoader
          color="#fff"
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        <p style={styles.loadingText}>Just grabbing your data</p>
      </div>
    );
  }

  return (
    <div style={styles.appRoot}>
      <SideBar />
      <Conversations />
      <Chat />
    </div>
  );
};

const styles: StyleSheet = {
  appRoot: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
  },
  loadingAppRoot: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#98BAFF",
  },
  loadingText: {
    color: "white",
    fontSize: 18,
    paddingTop: 20,
    fontWeight: 600,
    letterSpacing: 0.6,
  },
};
