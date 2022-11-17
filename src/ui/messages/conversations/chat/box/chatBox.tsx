import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import { messagesChatIdSelector } from "../../../../../redux/selectors/appDataSelector";
import { currentUserSelector } from "../../../../../redux/selectors/currentUserSelector";
import { postMessages } from "../../../../../redux/thunks/postMessages";
import { StyleSheet } from "../../../../../types/style";
import { ICON_NAME } from "../../../../../types/ui/icon";
import { Icon } from "../../../../shared/icon";

export const ChatBox = () => {
  const dispatch = useAppDispatch();

  const currentUserId = useAppSelector(currentUserSelector)._id;
  const chatId = useAppSelector(messagesChatIdSelector);

  const [newMessages, setNewMessages] = useState<string[]>([]);
  const [chatBoxValue, setChatBoxValue] = useState<string>("");

  const handleChatBoxValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChatBoxValue(e.target.value);

  const handleChatBoxSubmit = () =>
    setNewMessages((prevState) => {
      return [...prevState, chatBoxValue];
    });

  useEffect(() => {
    if (newMessages.length) {
      dispatch(postMessages(chatId, newMessages, currentUserId));
    }
  }, [newMessages]);

  return (
    <div style={styles.chatBox}>
      <Icon
        icon={ICON_NAME.EMOJI_SMILE}
        color="#686868"
        backgroundColor="#F4F4F4"
      />
      <input
        style={styles.input}
        placeholder="Start typing here..."
        value={chatBoxValue}
        onChange={(e) => handleChatBoxValueChange(e)}
      />
      <Icon
        onClick={handleChatBoxSubmit}
        icon={ICON_NAME.SEND}
        color="#F4F4F4"
        backgroundColor="#20c994"
        borderRadius={25}
        padding={6}
        size={20}
      />
    </div>
  );
};

const styles: StyleSheet = {
  chatBox: {
    display: "flex",
    flex: 0,
    flexDirection: "row",
    backgroundColor: "#F4F4F4",
    borderRadius: 24,
    paddingLeft: 8,
    paddingRight: 8,
    boxShadow: "1px 3px 1px #dbdbdb",
    alignItems: "center",
  },
  input: {
    border: "none",
    backgroundColor: "#F4F4F4",
    fontSize: 14,
    fontWeight: 500,
  },
};
