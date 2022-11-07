import { AppThunk } from "../../types/redux/store"
import {getCurrentUser as currentUser} from '../../api/getCurrentUser'
import { setCurrentUser, setCurrentUserError, setCurrentUserFetching } from "../reducers/currentUserSlice";

const email = "example@email.com";

export const getCurrentUser =
    (): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(setCurrentUserFetching(true))
            const userData = await currentUser(email)

            if (userData) {
                dispatch(setCurrentUser(userData))
            } else {
                console.warn(
                    'getCurrentUser: No user returned from backend',
                )
                dispatch(setCurrentUserError('getCurrentUser: No user returned from backend'))
            }
        } catch (err) {
            console.warn(`getCurrentUser: API failed - ${err}`)
            dispatch(setCurrentUserError(err))
        } finally {
            dispatch(setCurrentUserFetching(false))
        }
    }