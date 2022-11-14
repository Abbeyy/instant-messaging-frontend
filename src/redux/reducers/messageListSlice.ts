import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Message } from "../../types/messageHistory"
import { MessageListState } from "../../types/redux/reducers/messageListState"

export const initialState: MessageListState = {
    messageLists: [],
    error: '',
    fetching: false,
    appendingMessages: false,
}

type AppendMessages = {
    chatId: string
    messages: string[]
}

export const messageListSlice = createSlice({
    name: 'messageLists',
    initialState,
    reducers: {
        setMessageLists: (state, action: PayloadAction<Message[]>) => {
            state.messageLists = action.payload
        },
        setMessageListError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setMessageListFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        setMessageListFetchingAppending: (state, action: PayloadAction<boolean>) => {
            state.appendingMessages = action.payload
        },
    },
})

export const { 
    setMessageLists, 
    setMessageListError, 
    setMessageListFetching, 
    setMessageListFetchingAppending,
 } = messageListSlice.actions

export default messageListSlice.reducer