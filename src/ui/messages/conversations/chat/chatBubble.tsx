import React, { useEffect } from "react";
import { StyleSheet } from "../../../../types/style";
import Face2Icon from "@mui/icons-material/Face2";
import { MessageHistory } from "../../../../types/messageHistory";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { currentUserSelector } from "../../../../redux/selectors/currentUserSelector";
import { usersByIdsSelector } from "../../../../redux/selectors/usersSelector";
import { setMessagesChatId } from "../../../../redux/reducers/appDataSlice";
import { messagesChatIdSelector } from "../../../../redux/selectors/appDataSelector";

import { getMessageListsByPartyIds } from "../../../../redux/thunks/messageList/getMessageListsByPartyIds";

type Props = {
  history: MessageHistory;
};

export const ChatBubble = (props: Props) => {
  const { history } = props;

  const dispatch = useAppDispatch();

  const active = useAppSelector(messagesChatIdSelector) === history._id;
  const currentUser = useAppSelector(currentUserSelector);

  const recipientPartyIdsOfSender = history.parties.filter(
    (party) => party !== currentUser._id
  );

  const usersFromIds = useAppSelector(
    usersByIdsSelector(recipientPartyIdsOfSender)
  );

  const title =
    usersFromIds.length === 1
      ? `${usersFromIds[0].firstName} ${usersFromIds[0].surname}`
      : usersFromIds.map((user) => `${user.firstName}`).join(",");

  const primaryColor = !active ? "#686868" : "white";
  const secondaryColor = !active ? "white" : "#20c994";

  const iconStyle = { ...styles.person, color: primaryColor };

  const chatBubbleStyle = {
    ...styles.chatBubble,
    backgroundColor: secondaryColor,
  };

  const recipientNameStyle = {
    ...styles.recipientName,
    color: primaryColor,
  };

  const handleOnClick = () => dispatch(setMessagesChatId(history._id));

  useEffect(() => {
    if (active) {
      dispatch(getMessageListsByPartyIds(history.parties));
    }
  }, [active]);

  return (
    <button style={chatBubbleStyle} onClick={handleOnClick}>
      <Face2Icon style={iconStyle} />
      <h1 style={recipientNameStyle}>{title}</h1>
    </button>
  );
};

const styles: StyleSheet = {
  chatBubble: {
    display: "flex",
    flex: 0,
    flexDirection: "row",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: "center",
    textAlign: "start",
    marginTop: 8,
    marginBottom: 8,
    boxShadow: "1px 3px 1px #c2c2c2",
  },
  recipientName: {
    fontSize: 16,
    fontWeight: 600,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  person: {
    marginLeft: 8,
    marginRight: 8,
    width: 20,
    height: 20,
  },
};
