import { RootState } from "../../types/redux/store"

export const usersSelector = ({ users }: RootState) => users.users
