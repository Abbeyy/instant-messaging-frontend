import React from "react";
import { StyleSheet } from "../../../../types/style";
import { ICON_NAME } from "../../../../types/ui/icon";
import { USER_STATUS } from "../../../../types/user";
import { Icon } from "../../../shared/icon";

type Props = {
  recipientName: string;
  status: USER_STATUS;
};

export const ChatHeader = (props: Props) => {
  const { recipientName, status } = props;

  let userStatus = "";
  if (status === USER_STATUS.ONLINE) {
    userStatus = "Available to chat";
  }
  if (status === USER_STATUS.OFFLINE) {
    userStatus = "User offline";
  }

  return (
    <div style={styles.chatHeader}>
      <p>{userStatus}</p>
      <h1 style={styles.recipientName}>{recipientName}</h1>
      <Icon icon={ICON_NAME.PHONE} color="#686868" />
      <Icon icon={ICON_NAME.MORE} color="#686868" />
    </div>
  );
};

const styles: StyleSheet = {
  chatHeader: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
  recipientName: {
    color: "#686868",
    fontSize: 24,
  },
  userOption: {
    width: 30,
    height: 30,
    color: "#686868",
  },
};
