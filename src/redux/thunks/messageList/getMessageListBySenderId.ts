import { AppThunk } from "../../../types/redux/store"

import {getMessageListsBySenderId as getMsgLists} from '../../../api/messageHistory/getMessageListsBySenderId'
import { setMessageLists, setMessageListError, setMessageListFetching } from "../../reducers/messageListSlice";

export const getMessageListsBySenderId =
    (senderId: string): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(setMessageListFetching(true))
            const msgLists = await getMsgLists(senderId)

            if (msgLists) {
                dispatch(setMessageLists(msgLists))
            } else {
                console.warn(
                    'getMessageList - bySenderId: No lists returned from backend',
                )
                dispatch(setMessageListError('getMessageList - bySenderId: No lists returned from backend'))
            }
        } catch (err) {
            console.warn(`getMessageList - bySenderId: API failed - ${err}`)
            dispatch(setMessageListError(err))
        } finally {
            dispatch(setMessageListFetching(false))
        }
    }