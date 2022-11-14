import React from "react";
import { useAppSelector } from "../../../../../hooks";
import { currentUserSelector } from "../../../../../redux/selectors/currentUserSelector";
import { Message } from "../../../../../types/messageHistory";
import { StyleSheet } from "../../../../../types/style";

type Props = {
  message: Message;
};

export const ChatMessage = (props: Props) => {
  const { message } = props;

  const { sender, messages, timeStamp } = message;

  const currentUser = useAppSelector(currentUserSelector);

  const fromSender = currentUser._id === sender;

  return (
    <div style={fromSender ? styles.fromSender : styles.fromRecipient}>
      {messages?.map((message) => (
        <p>{message}</p>
      ))}
      <p>{`${timeStamp}`}</p>
    </div>
  );
};

const styles: StyleSheet = {
  fromSender: {},
  fromRecipient: {},
};
