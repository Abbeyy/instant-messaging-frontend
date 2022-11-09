import React from "react";
import { StyleSheet } from "../../../../types/style";
import Face2Icon from "@mui/icons-material/Face2";

type Props = {
  recipientName: string;
  onClick: () => void;
  active?: boolean;
};

export const ChatBubble = (props: Props) => {
  const { recipientName, onClick, active = false } = props;

  const primaryColor = !active ? "#686868" : "white";
  const secondaryColor = !active ? "white" : "#20c994";

  const iconStyle = { ...styles.person, color: primaryColor };

  const chatBubbleStyle = {
    ...styles.chatBubble,
    backgroundColor: secondaryColor,
  };

  const recipientNameStyle = {
    ...styles.recipientName,
    color: primaryColor,
  };

  return (
    <button style={chatBubbleStyle} onClick={onClick}>
      <Face2Icon style={iconStyle} />
      <h1 style={recipientNameStyle}>{recipientName}</h1>
    </button>
  );
};

const styles: StyleSheet = {
  chatBubble: {
    display: "flex",
    flex: 0,
    flexDirection: "row",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
    boxShadow: "1px 3px 1px #c2c2c2",
  },
  recipientName: {
    fontSize: 16,
    fontWeight: 600,
    flex: 6,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  person: {
    flex: 1.5,
    width: 20,
    height: 20,
  },
};
