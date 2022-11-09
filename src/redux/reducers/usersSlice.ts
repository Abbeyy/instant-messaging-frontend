import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UsersState } from "../../types/redux/reducers/UsersState"
import { User } from "../../types/user"

export const initialState: UsersState = {
    users: [],
}

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload
        },
    },
})

export const { 
    setUsers,
 } = UsersSlice.actions

 export default UsersSlice.reducer