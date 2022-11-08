import { StyleSheet } from "../../types/style";
import HouseIcon from "@mui/icons-material/House";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { ICON_NAME } from "../../types/ui/icon";
import React from "react";

type Props = {
  icon: ICON_NAME;
  color?: string;
  shadowColor?: string;
};

export const Icon = (props: Props) => {
  const { icon, color = "#98BAFF", shadowColor } = props;

  const colour = { color };
  const style = !shadowColor
    ? styles.icon
    : { ...styles.icon, boxShadow: `1px 3px 1px ${shadowColor}` };
  const iconStyle = { ...colour, ...style };

  let iconButton = null;
  switch (icon) {
    case ICON_NAME.HOUSE:
      iconButton = <HouseIcon style={iconStyle} />;
      break;
    case ICON_NAME.MESSAGE:
      iconButton = <MessageIcon style={iconStyle} />;
      break;
    case ICON_NAME.PHONE:
      iconButton = <PhoneIphoneIcon style={iconStyle} />;
      break;
    case ICON_NAME.MORE:
      iconButton = <MoreHorizIcon style={iconStyle} />;
      break;
    default:
      iconButton = <CheckBoxOutlineBlankIcon style={styles.iconStyle} />;
      break;
  }

  return <div style={styles.iconRow}>{iconButton}</div>;
};

const styles: StyleSheet = {
  icon: {
    backgroundColor: "white",
    padding: 4,
    margin: 8,
    width: 30,
    height: 30,
    borderRadius: 8,
  },
  iconWithShadow: {
    backgroundColor: "white",
    padding: 4,
    margin: 8,
    width: 30,
    height: 30,
    borderRadius: 8,
  },
  iconRow: {
    flex: 0,
    display: "flex",
  },
};
