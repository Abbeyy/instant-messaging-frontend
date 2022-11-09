import React from "react";
import { useAppSelector } from "../../../hooks";
import { currentUserSelector } from "../../../redux/selectors/currentUserSelector";
import { messageHistoryRecipientsBySenderIdSelector } from "../../../redux/selectors/messageHistorySelector";
import { StyleSheet } from "../../../types/style";
import { ChatBubble } from "./chat/chatBubble";

export const Conversations = () => {
  const currentUser = useAppSelector(currentUserSelector);

  const recipientsOfSender = useAppSelector(
    messageHistoryRecipientsBySenderIdSelector(currentUser._id)
  );

  return (
    <div style={styles.conversations}>
      <h1 style={styles.title}>Conversations</h1>
      {recipientsOfSender.map((recipient) => (
        <ChatBubble
          recipientName={`${recipient.firstName} ${recipient.surname}`}
        />
      ))}
    </div>
  );
};

const styles: StyleSheet = {
  conversations: {
    flex: 3,
    display: "flex",
    backgroundColor: "#F4F4F4",
    flexDirection: "column",
    padding: 24,
    textAlign: "left",
  },
  title: {
    color: "#686868",
    fontSize: 20,
    marginBottom: 12,
  },
};
