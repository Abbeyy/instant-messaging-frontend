import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../types/redux/store"

export const usersSelector = ({ users }: RootState) => users.users

export const userByIdSelector = (id: string) => createSelector(usersSelector, (allUsers) => allUsers.find((user) => user._id === id))