import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Message, MessageHistory } from "../../types/messageHistory"
import { MessageHistoryState } from "../../types/redux/reducers/messageHistoryState"

export const initialState: MessageHistoryState = {
    messageHistory: [],
    error: '',
    fetching: false,
    appendingMessages: false,
}

type AppendMessage = {
    historyId: string
    messages: Message[]
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
        appendMessageListToHistory: (state, action: PayloadAction<AppendMessage>) => {
            const {historyId, messages} = action.payload

            const history = state.messageHistory.find((currentHistory) => currentHistory._id === historyId)
            const idx = state.messageHistory.indexOf(history)

            if (history) {
                const updatedHistory: MessageHistory = {
                    ...history, 
                    messageList: [...history.messageList, ...messages.map((messageList) => messageList._id)]
                }

                state.messageHistory[idx] = updatedHistory
            }
        },
    },
})

export const { 
    setMessageHistories, 
    setMessageHistoryError, 
    setMessageHistoryFetching, 
    setMessageHistoryAppendingMessages,
    appendMessageListToHistory,
 } = messageHistorySlice.actions

export default messageHistorySlice.reducer