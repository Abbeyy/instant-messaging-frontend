import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CurrentUserState } from "../../types/redux/reducers/currentUserState"
import { User } from "../../types/user"

export const initialState: CurrentUserState = null

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User | null>) => {
            state = action.payload
        },
    },
})

export const { setCurrentUser } = currentUserSlice.actions