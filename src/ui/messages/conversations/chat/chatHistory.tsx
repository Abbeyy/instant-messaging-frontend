import React from "react";
import { StyleSheet } from "../../../../types/style";
import { USER_STATUS } from "../../../../types/user";
import { ChatBox } from "./box/chatBox";
import { ChatHeader } from "./header/chatHeader";

type Props = {
  recipientName: string;
};

export const ChatHistory = (props: Props) => {
  const { recipientName } = props;

  return (
    <div style={styles.chat}>
      <ChatHeader recipientName={recipientName} status={USER_STATUS.ONLINE} />
      <ChatBox />
    </div>
  );
};

const styles: StyleSheet = {
  chat: {
    flex: 4,
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    padding: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  recipientName: {
    color: "#686868",
    fontSize: 24,
  },
};