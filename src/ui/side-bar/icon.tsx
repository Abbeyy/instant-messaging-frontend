import { StyleSheet } from "../../types/style";
import HouseIcon from "@mui/icons-material/House";
import MessageIcon from "@mui/icons-material/Message";
import { ICON_NAME } from "../../types/ui/icon";
import React from "react";

type Props = {
  icon: ICON_NAME;
};

export const Icon = (props: Props) => {
  const { icon } = props;

  let iconButton = null;
  if (icon === ICON_NAME.HOUSE) {
    iconButton = <HouseIcon style={styles.icon} />;
  }
  if (icon === ICON_NAME.MESSAGE) {
    iconButton = <MessageIcon style={styles.icon} />;
  }

  return <div style={styles.iconRow}>{iconButton}</div>;
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
    boxShadow: "1px 3px 1px #6295fc",
  },
  iconRow: {
    flex: 0,
    display: "flex",
  },
};
