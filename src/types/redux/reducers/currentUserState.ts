import { User } from "../../user";

export type CurrentUserState = {
    user: User | null
    error: string
    fetching: boolean
    nav: {
        sideBar: SIDEBAR_MENU_OPTION
    }
}

export enum SIDEBAR_MENU_OPTION {
    MESSAGES = 'Messages',
    HOME = 'Home'
}