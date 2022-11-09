import { AppThunk } from "../../types/redux/store"
import { setMessageHistories, setMessageHistoryError, setMessageHistoryFetching } from "../reducers/messageHistorySlice";

import { getMessageHistoryBySenderId as getMessageHistory} from '../../api/getMessageHistoryBySenderId'

export const getMessageHistoryBySenderId =
    (senderId: string): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(setMessageHistoryFetching(true))
            const histories = await getMessageHistory(senderId)

            if (histories) {
                dispatch(setMessageHistories(histories))
            } else {
                console.warn(
                    'getMessageHistoryBySenderId: No histories returned from backend',
                )
                dispatch(setMessageHistoryError('getMessageHistoryBySenderId: No histories returned from backend'))
            }
        } catch (err) {
            console.warn(`getMessageHistoryBySenderId: API failed - ${err}`)
            dispatch(setMessageHistoryError(err))
        } finally {
            dispatch(setMessageHistoryFetching(false))
        }
    }