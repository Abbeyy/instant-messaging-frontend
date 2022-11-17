import { AppThunk } from "../../types/redux/store"

import { postMessages as postMsgs } from "../../api/messageHistory/postMessages";
import { setMessageListPosting, postingMessageList } from "../reducers/messageListSlice";
import { appendMessageListToHistory } from "../reducers/messageHistorySlice";
import moment from "moment";

export const postMessages =
    (historyId: string, messages: string[], senderId: string): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(setMessageListPosting(true))

            const timeStamp = moment(new Date()).format('YYYY-MM-DD[T00:00:00.000Z]')

            const response = await postMsgs(
                historyId, 
                messages, 
                senderId, 
                timeStamp
            )

            if (response.data && response.data.newMsgId) {
                dispatch(postingMessageList({
                    _id: response.data.newMsgId,
                    sender: senderId, 
                    messages, 
                    timeStamp: moment(timeStamp).toDate()}
                ))

                dispatch(appendMessageListToHistory({
                    historyId, 
                    messages: response.data.newMsg
                }))
            } else {
                console.warn(
                    'postMessages: No response from backend',
                )
            }
        } catch (err) {
            console.warn(`postMessages: API failed - ${err}`)
        } finally {
            dispatch(setMessageListPosting(false))
        }
    }