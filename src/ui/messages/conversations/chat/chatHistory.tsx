import React from "react";
import { useAppSelector } from "../../../../hooks";
import { currentUserSelector } from "../../../../redux/selectors/currentUserSelector";
import { recentRecipientBySenderIdSelector } from "../../../../redux/selectors/messageHistorySelector";
import { StyleSheet } from "../../../../types/style";
import { USER_STATUS } from "../../../../types/user";
import { ChatBox } from "./box/chatBox";
import { ChatHeader } from "./header/chatHeader";

export const ChatHistory = () => {
  const currentUser = useAppSelector(currentUserSelector);

  const recentRecipientOfSender = useAppSelector(
    recentRecipientBySenderIdSelector(currentUser._id)
  );

  if (!recentRecipientOfSender) {
    return (
      <div style={styles.chat}>
        <p>You have no recent recipients to chat with!</p>
      </div>
    );
  }

  const name = `${recentRecipientOfSender.firstName} ${recentRecipientOfSender.surname}`;

  return (
    <div style={styles.chat}>
      <ChatHeader recipientName={name} status={USER_STATUS.ONLINE} />
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
