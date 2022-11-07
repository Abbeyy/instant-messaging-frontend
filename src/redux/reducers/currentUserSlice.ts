import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CurrentUserState } from "../../types/redux/reducers/currentUserState"
import { User } from "../../types/user"

export const initialState: CurrentUserState = {
    user: null,
    error: '',
    fetching: false
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
    },
})

export const { 
    setCurrentUser,
    setCurrentUserError,
    setCurrentUserFetching
 } = currentUserSlice.actions

 export default currentUserSlice.reducer