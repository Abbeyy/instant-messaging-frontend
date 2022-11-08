import { Outlet, useNavigate } from "react-router-dom";
import { SideBar } from "./side-bar/sideBar";
import React, { useEffect } from "react";
import { StyleSheet } from "../../types/style";

export const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/messages");
  }, []);

  return (
    <div style={styles.layout}>
      <SideBar />
      <Outlet />
    </div>
  );
};

const styles: StyleSheet = {
  layout: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
  },
};
