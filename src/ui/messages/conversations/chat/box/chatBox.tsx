import React from "react";
import { StyleSheet } from "../../../../../types/style";
import { ICON_NAME } from "../../../../../types/ui/icon";
import { Icon } from "../../../../shared/icon";

export const ChatBox = () => (
  <div style={styles.chatBox}>
    <Icon
      icon={ICON_NAME.EMOJI_SMILE}
      color="#686868"
      backgroundColor="#F4F4F4"
    />
    <input style={styles.input} placeholder="Start typing here..." />
    <Icon
      icon={ICON_NAME.SEND}
      color="#F4F4F4"
      backgroundColor="#20c994"
      borderRadius={25}
      padding={6}
      size={20}
    />
  </div>
);

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
