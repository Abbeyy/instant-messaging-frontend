import { ChatHistory } from "./conversations/chat/chatHistory";
import { Conversations } from "./conversations/conversations";
import React, { useEffect } from "react";
import { StyleSheet } from "../../types/style";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { currentUserSelector } from "../../redux/selectors/currentUserSelector";
import { getMessageHistoryBySenderId } from "../../redux/thunks/getMessageHistory";

export const Messages = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(currentUserSelector);

  useEffect(() => {
    if (currentUser) {
      dispatch(getMessageHistoryBySenderId(currentUser._id));
    }
  }, [currentUser]);

  return (
    <div style={styles.messages}>
      <Conversations />
      <ChatHistory />
    </div>
  );
};

const styles: StyleSheet = {
  messages: {
    display: "flex",
    flex: 7,
    backgroundColor: "white",
    flexDirection: "row",
  },
};
