import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MessageHistory } from "../../types/messageHistory"
import { MessageHistoryState } from "../../types/redux/reducers/messageHistoryState"

export const initialState: MessageHistoryState = {
    messageHistory: [],
    error: '',
    fetching: false,
    appendingMessages: false,
}

type AppendMessages = {
    chatId: string
    messages: string[]
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
        setMessageHistoryAppendingMessages: (state, action: PayloadAction<boolean>) => {
            state.appendingMessages = action.payload
        },
        // appendMessagesToMessageList: (state, action: PayloadAction<AppendMessages>) => {
        //     const { chatId, messages} = action.payload

        //     const messageHistory = state.messageHistory.find((history) => history._id === chatId)
        //     const idx = state.messageHistory.indexOf(messageHistory)

        //     const updatedMessageHistory = {...messageHistory, messageList: [...messageHistory.messageList, ...messages]}

        //     state.messageHistory[idx] = updatedMessageHistory
        // },
    },
})

export const { 
    setMessageHistories, 
    setMessageHistoryError, 
    setMessageHistoryFetching, 
    setMessageHistoryAppendingMessages,
    // appendMessagesToMessageList
 } = messageHistorySlice.actions

export default messageHistorySlice.reducer