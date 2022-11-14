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

  const timeStampFormatted = new Date(timeStamp);

  return (
    <div style={fromSender ? styles.end : styles.start}>
      <div style={fromSender ? styles.fromSender : styles.fromRecipient}>
        {messages?.map((message) => (
          <p
            style={
              fromSender
                ? styles.messageTextFromSender
                : styles.messageTextFromRecipient
            }
          >
            {message}
          </p>
        ))}
      </div>
      <p
        style={
          fromSender
            ? styles.timeStampFromSender
            : styles.timeStampFromRecipient
        }
      >{`${timeStampFormatted.toDateString()}`}</p>
    </div>
  );
};

const styles: StyleSheet = {
  start: {
    display: "flex",
    flex: 0,
    flexDirection: "column",
    width: "75%",

    alignSelf: "start",
  },
  end: {
    display: "flex",
    flex: 0,
    flexDirection: "column",
    width: "75%",

    alignSelf: "end",
  },
  fromSender: {
    display: "flex",
    flex: 0,
    flexDirection: "column",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,

    boxShadow: "1px 2px 1px #c2c2c2",
    border: "0.01rem solid #c2c2c2",
  },
  fromRecipient: {
    display: "flex",
    flex: 0,
    flexDirection: "column",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,

    backgroundColor: "#20c994",
    boxShadow: "1px 2px 1px #189e74",
  },
  messageTextFromSender: {
    margin: 0,
    fontSize: 14,

    color: "black",
  },
  messageTextFromRecipient: {
    margin: 0,
    fontSize: 14,

    color: "white",
  },
  timeStampFromSender: {
    margin: 0,
    fontSize: 10,
    color: "#686868",
    marginTop: 8,

    alignSelf: "end",
  },
  timeStampFromRecipient: {
    margin: 0,
    fontSize: 10,
    color: "#686868",
    marginTop: 8,

    alignSelf: "start",
  },
};
