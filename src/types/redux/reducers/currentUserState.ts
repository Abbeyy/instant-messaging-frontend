import { User } from "../../user";

export type CurrentUserState = {
    user: User | null
    error: string
    fetching: boolean
}