import { StyleSheet } from "../../types/style";
import HouseIcon from "@mui/icons-material/House";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { ICON_NAME } from "../../types/ui/icon";
import React from "react";
import { EmojiEmotions } from "@mui/icons-material";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import BlurOnIcon from "@mui/icons-material/BlurOn";

type Props = {
  icon: ICON_NAME;
  color?: string;
  backgroundColor?: string;
  shadowColor?: string;
  borderRadius?: number;
  margin?: number;
  padding?: number;
  size?: number;
  active?: boolean;
  onClick?: () => void;
};

export const Icon = (props: Props) => {
  const {
    icon,
    color = "#20c994",
    backgroundColor = "white",
    shadowColor,
    borderRadius = 8,
    margin = 8,
    padding = 4,
    size = 30,
    active = false,
    onClick,
  } = props;

  const baseStyle = {
    borderRadius,
    margin,
    padding,
    width: size,
    height: size,
    color,
    backgroundColor,
  };

  const iconStyle = !shadowColor
    ? baseStyle
    : { ...baseStyle, boxShadow: `1px 3px 1px ${shadowColor}` };

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
    case ICON_NAME.EMOJI_SMILE:
      iconButton = <EmojiEmotions style={iconStyle} />;
      break;
    case ICON_NAME.SEND:
      iconButton = <SendToMobileIcon style={iconStyle} />;
      break;
    default:
      iconButton = <CheckBoxOutlineBlankIcon style={styles.iconStyle} />;
      break;
  }

  const handleOnPress = () => onClick();

  return (
    <button style={styles.iconRow} onClick={handleOnPress}>
      {active ? <BlurOnIcon style={styles.active} /> : null}
      {iconButton}
    </button>
  );
};

const styles: StyleSheet = {
  active: {
    color: "white",
    position: "absolute",
    left: 20,
  },
  iconRow: {
    flex: 0,
    display: "flex",
    alignItems: "center",
  },
};
