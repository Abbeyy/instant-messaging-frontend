import { AppThunk } from "../../types/redux/store"
import { setAppIsLoading } from "../reducers/appDataSlice";
import { getAllUsers } from "./getAllUsers";
import { getCurrentUser } from "./getCurrentUser";

export const onAppLoad =
    (): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(setAppIsLoading(true))
            dispatch(getCurrentUser());
            dispatch(getAllUsers());

        } catch (err) {
            console.warn(`onAppLoad: Thunk failed - ${err}`)
        } finally {
            dispatch(setAppIsLoading(false))
        }
    }