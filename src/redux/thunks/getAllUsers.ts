import { AppThunk } from "../../types/redux/store"
import {getAllUsers as getAllUserData} from '../../api/getAllUsers'
import { setUsers } from "../reducers/usersSlice";

export const getAllUsers =
    (): AppThunk =>
    async (dispatch, getState) => {
        try {
            const allUserData = await getAllUserData()

            if (allUserData) {
                dispatch(setUsers(allUserData))
            } else {
                console.warn(
                    'getAllUsers: No users returned from backend',
                )
            }
        } catch (err) {
            console.warn(`getAllUsers: API failed - ${err}`)
        }
    }