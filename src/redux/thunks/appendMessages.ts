import { AppThunk } from "../../types/redux/store"

import { postAppendMessages } from "../../api/messageHistory/postAppendMessages";
import { setMessageListFetchingAppending } from "../reducers/messageListSlice";

export const appendMessages =
    (chatId: string, messages: string[], senderId: string): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(setMessageListFetchingAppending(true))
            const result = await postAppendMessages(chatId, messages, senderId)

            if (result) {
                // dispatch(appendMessage({chatId, messages}))
            } else {
                console.warn(
                    'appendMessages: No response from backend',
                )
            }
        } catch (err) {
            console.warn(`appendMessages: API failed - ${err}`)
        } finally {
            dispatch(setMessageListFetchingAppending(false))
        }
    }