import React from "react";
import { useAppSelector } from "../../../../hooks";
import { userRecipientsOfChatSelector } from "../../../../redux/selectors";
import { messagesChatIdSelector } from "../../../../redux/selectors/appDataSelector";
import { currentUserSelector } from "../../../../redux/selectors/currentUserSelector";
import { StyleSheet } from "../../../../types/style";
import { USER_STATUS } from "../../../../types/user";
import { ChatBox } from "./box/chatBox";
import { ChatFallback } from "./error/chatFallback";
import { ChatHeader } from "./header/chatHeader";

export const ChatHistory = () => {
  const currentUser = useAppSelector(currentUserSelector);
  const chosenChatId = useAppSelector(messagesChatIdSelector);
  const recipients = useAppSelector(
    userRecipientsOfChatSelector(chosenChatId, currentUser._id)
  );

  if (!recipients.length) {
    return <ChatFallback />;
  }

  const title =
    recipients.length === 1
      ? `${recipients[0].firstName} ${recipients[0].surname}`
      : recipients.map((recipient) => `${recipient.firstName}`).join(", ");

  return (
    <div style={styles.chat}>
      <ChatHeader title={title} status={USER_STATUS.ONLINE} />
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
};
