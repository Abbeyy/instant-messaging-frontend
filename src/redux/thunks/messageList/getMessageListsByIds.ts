import { AppThunk } from "../../../types/redux/store"

import {getMessageListsByIds as getMsgListsByIds} from '../../../api/messageHistory/getMessageListsByIds'
import { setMessageLists, setMessageListError, setMessageListFetching } from "../../reducers/messageListSlice";

export const getMessageListsByIds =
    (messageListIds: string[]): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(setMessageListFetching(true))
            const msgLists = await getMsgListsByIds(messageListIds)

            if (msgLists) {
                dispatch(setMessageLists(msgLists))
            } else {
                console.warn(
                    'getMessageLists - ByIds: No lists returned from backend',
                )
                dispatch(setMessageListError('getMessageLists - ByIds: No lists returned from backend'))
            }
        } catch (err) {
            console.warn(`getMessageLists - ByIds: API failed - ${err}`)
            dispatch(setMessageListError(err))
        } finally {
            dispatch(setMessageListFetching(false))
        }
    }