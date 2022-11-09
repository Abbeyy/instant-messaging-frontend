import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MessageHistory } from "../../types/messageHistory"
import { MessageHistoryState } from "../../types/redux/reducers/messageHistoryState"

export const initialState: MessageHistoryState = {
    messageHistory: [],
    error: '',
    fetching: false,
}

export const messageHistorySlice = createSlice({
    name: 'messageHistory',
    initialState,
    reducers: {
        setMessageHistories: (state, action: PayloadAction<MessageHistory[]>) => {
            state.messageHistory = action.payload
        },
        setMessageHistoryError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setMessageHistoryFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
    },
})

export const { setMessageHistories, setMessageHistoryError, setMessageHistoryFetching } = messageHistorySlice.actions

export default messageHistorySlice.reducer