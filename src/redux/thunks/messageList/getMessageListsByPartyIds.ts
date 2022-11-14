import { AppThunk } from "../../../types/redux/store"

import {getMessageListsBySenderIds as getMsgLists} from '../../../api/messageHistory/getMessageListsBySenderIds'
import { setMessageLists, setMessageListError, setMessageListFetching } from "../../reducers/messageListSlice";

export const getMessageListsByPartyIds =
    (ids: string[]): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(setMessageListFetching(true))
            const msgLists = await getMsgLists(ids)

            if (msgLists) {
                dispatch(setMessageLists(msgLists))
            } else {
                console.warn(
                    'getMessageList - bySenderIds: No lists returned from backend',
                )
                dispatch(setMessageListError('getMessageList - bySenderIds: No lists returned from backend'))
            }
        } catch (err) {
            console.warn(`getMessageList - bySenderIds: API failed - ${err}`)
            dispatch(setMessageListError(err))
        } finally {
            dispatch(setMessageListFetching(false))
        }
    }