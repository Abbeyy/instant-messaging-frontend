import React, { useEffect } from "react";
import { HashLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  currentUserFetchingSelector,
  currentUserSelector,
} from "../redux/selectors/currentUserSelector";
import { getCurrentUser } from "../redux/thunks/getCurrentUser";
import { StyleSheet } from "../types/style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Messages } from "./messages/messages";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const styles: StyleSheet = {
  loadingAppRoot: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#20c994",
  },
  loadingText: {
    color: "white",
    fontSize: 18,
    paddingTop: 20,
    fontWeight: 600,
    letterSpacing: 0.6,
  },
};
