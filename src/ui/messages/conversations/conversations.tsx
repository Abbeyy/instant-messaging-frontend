import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setMessagesChatRecipientId } from "../../../redux/reducers/appDataSlice";
import { messagesChatRecipientUserIdSelector } from "../../../redux/selectors/appDataSelector";
import { currentUserSelector } from "../../../redux/selectors/currentUserSelector";
import { recipientsBySenderIdSelector } from "../../../redux/selectors/messageHistorySelector";
import { StyleSheet } from "../../../types/style";
import { ChatBubble } from "./chat/chatBubble";

export const Conversations = () => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(currentUserSelector);
  const chosenRecipientId = useAppSelector(messagesChatRecipientUserIdSelector);

  const recipientsOfSender = useAppSelector(
    recipientsBySenderIdSelector(currentUser._id)
  );

  const handleOnBubbleClick = (id: string) =>
    dispatch(setMessagesChatRecipientId(id));

  return (
    <div style={styles.conversations}>
      <h1 style={styles.title}>Conversations</h1>
      {recipientsOfSender.map((recipient) => (
        <ChatBubble
          key={recipient._id}
          recipientName={`${recipient.firstName} ${recipient.surname}`}
          onClick={() => handleOnBubbleClick(recipient._id)}
          active={recipient._id === chosenRecipientId}
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
