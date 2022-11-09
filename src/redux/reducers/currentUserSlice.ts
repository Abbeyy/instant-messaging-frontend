import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CurrentUserState, SIDEBAR_MENU_OPTION } from "../../types/redux/reducers/currentUserState"
import { User } from "../../types/user"

export const initialState: CurrentUserState = {
    user: null,
    error: '',
    fetching: false,
    nav: {
        sideBar: SIDEBAR_MENU_OPTION.MESSAGES
    }
}

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload
        },
        setCurrentUserError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setCurrentUserFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        setNavigationSidebar: (state, action: PayloadAction<SIDEBAR_MENU_OPTION>) => {
            state.nav.sideBar = action.payload
        },
    },
})

export const { 
    setCurrentUser,
    setCurrentUserError,
    setCurrentUserFetching,
    setNavigationSidebar
 } = currentUserSlice.actions

 export default currentUserSlice.reducer