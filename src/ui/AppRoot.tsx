import React, { useEffect } from "react";
import { HashLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  currentUserFetchingSelector,
  currentUserSelector,
} from "../redux/selectors/currentUserSelector";
import { StyleSheet } from "../types/style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Messages } from "./messages/messages";
import { Home } from "./home/home";
import { onAppLoad } from "../redux/thunks/onAppLoad";
import { appIsLoadingSelector } from "../redux/selectors/appDataSelector";

export const AppRoot = () => {
  const dispatch = useAppDispatch();

  const isAppLoading = useAppSelector(appIsLoadingSelector);
  const fetchingUser = useAppSelector(currentUserFetchingSelector);
  const currentUser = useAppSelector(currentUserSelector);

  const loading = fetchingUser || !currentUser || isAppLoading;
  // on load
  useEffect(() => {
    dispatch(onAppLoad());
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
          <Route path="home" element={<Home />} />
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
