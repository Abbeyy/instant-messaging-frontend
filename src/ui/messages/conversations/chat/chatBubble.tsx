import React from "react";
import { StyleSheet } from "../../../../types/style";
import Face2Icon from "@mui/icons-material/Face2";

type Props = {
  recipientName: string;
};

export const ChatBubble = (props: Props) => {
  const { recipientName } = props;

  return (
    <div style={styles.chatBubble}>
      <Face2Icon style={styles.person} />
      <h1 style={styles.recipientName}>{recipientName}</h1>
    </div>
  );
};

const styles: StyleSheet = {
  chatBubble: {
    display: "flex",
    flex: 0,
    backgroundColor: "white",
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
    color: "#686868",
    fontSize: 16,
    fontWeight: 500,
    flex: 6,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  person: {
    flex: 1.5,
    width: 20,
    height: 20,
    color: "#686868",
  },
};
