import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  currentUserFetchingSelector,
  currentUserSelector,
} from "./redux/selectors/currentUserSelector";
import { getCurrentUser } from "./redux/thunks/getCurrentUser";

export const AppRoot = () => {
  const dispatch = useAppDispatch();

  const fetchingUser = useAppSelector(currentUserFetchingSelector);
  const currentUser = useAppSelector(currentUserSelector);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div>
      {!fetchingUser && currentUser
        ? `Hi, ${currentUser.firstName}!`
        : "Just grabbing your data..."}
    </div>
  );
};
