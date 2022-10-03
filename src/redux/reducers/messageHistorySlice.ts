import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MessageHistory } from "../../types/messageHistory"
import { MessageHistoryState } from "../../types/redux/reducers/messageHistoryState"

export const initialState: MessageHistoryState = []

export const messageHistorySlice = createSlice({
    name: 'messageHistory',
    initialState,
    reducers: {
        appendMessages: (state, action: PayloadAction<MessageHistory[]>) => {
            const newMessages = action.payload
            const existingMessageIds = state.map((messageHistory) => messageHistory.timeStamp)

            newMessages.forEach((newMessageHistory) => {
                if (!existingMessageIds.includes(newMessageHistory.timeStamp)) {
                    state.push(newMessageHistory)
                }
            })
        },
        removeMessages: (state, action: PayloadAction<MessageHistory[]>) => {
            const markedMessageIds = action.payload.map((messageHistory) => messageHistory.timeStamp)
            const allMessages = state

            state = allMessages.filter(
                (newMessageHistory) => !markedMessageIds.includes(newMessageHistory.timeStamp),
            )
        },
    },
})

export const { appendMessages, removeMessages } = messageHistorySlice.actions