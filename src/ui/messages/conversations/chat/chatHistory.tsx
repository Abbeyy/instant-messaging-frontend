import React from "react";
import { useAppSelector } from "../../../../hooks";
import { messagesChatRecipientUserIdSelector } from "../../../../redux/selectors/appDataSelector";
import { userByIdSelector } from "../../../../redux/selectors/usersSelector";
import { StyleSheet } from "../../../../types/style";
import { USER_STATUS } from "../../../../types/user";
import { ChatBox } from "./box/chatBox";
import { ChatHeader } from "./header/chatHeader";

export const ChatHistory = () => {
  const chosenRecipientId = useAppSelector(messagesChatRecipientUserIdSelector);
  const recipient = useAppSelector(userByIdSelector(chosenRecipientId));

  if (!recipient) {
    return (
      <div style={styles.chat}>
        <p>Select a conversation to see it here in detail</p>
      </div>
    );
  }

  const name = `${recipient.firstName} ${recipient.surname}`;

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
