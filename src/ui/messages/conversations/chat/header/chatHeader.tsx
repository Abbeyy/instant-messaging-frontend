import React from "react";
import { StyleSheet } from "../../../../../types/style";
import { ICON_NAME } from "../../../../../types/ui/icon";
import { USER_STATUS } from "../../../../../types/user";
import { Icon } from "../../../../shared/icon";

type Props = {
  title: string;
  status: USER_STATUS;
};

export const ChatHeader = (props: Props) => {
  const { title, status } = props;

  let userStatus = "";
  if (status === USER_STATUS.ONLINE) {
    userStatus = "Available to chat";
  }
  if (status === USER_STATUS.OFFLINE) {
    userStatus = "User offline";
  }

  return (
    <div style={styles.chatHeader}>
      <div style={styles.recipientInfo}>
        <p style={styles.userStatus}>{userStatus}</p>
        <h1 style={styles.title}>{title}</h1>
      </div>
      <div style={styles.userOptions}>
        <Icon icon={ICON_NAME.PHONE} color="#686868" />
        <Icon icon={ICON_NAME.MORE} color="#686868" />
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  chatHeader: {
    display: "flex",
    flex: 0,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    paddingBottom: 24,
    paddingLeft: 14,
    paddingRight: 0,
    borderBottom: "1px solid #bfbfbf",
  },
  recipientInfo: {
    display: "flex",
    flex: 3,
    flexDirection: "column",
  },
  title: {
    color: "#20c994",
    fontSize: 24,
    fontWeight: 800,
  },
  userOptions: {
    display: "flex",
    flexDirection: "row",
  },
  userStatus: {
    color: "#686868",
    fontSize: 14,
    fontWeight: 400,
    margin: 0,
    marginBottom: 4,
  },
};
