import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Message } from "../../types/messageHistory"
import { MessageListState } from "../../types/redux/reducers/messageListState"

export const initialState: MessageListState = {
    messageLists: [],
    error: '',
    fetching: false,
    postingMessages: false,
}

export const messageListSlice = createSlice({
    name: 'messageLists',
    initialState,
    reducers: {
        setMessageLists: (state, action: PayloadAction<Message[]>) => {
            state.messageLists = action.payload
        },
        postingMessageList: (state, action: PayloadAction<Message>) => {
            state.messageLists.push(action.payload)
        },
        setMessageListError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        setMessageListFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        setMessageListPosting: (state, action: PayloadAction<boolean>) => {
            state.postingMessages = action.payload
        },
    },
})

export const { 
    setMessageLists,
    postingMessageList,
    setMessageListError, 
    setMessageListFetching, 
    setMessageListPosting,
 } = messageListSlice.actions

export default messageListSlice.reducer