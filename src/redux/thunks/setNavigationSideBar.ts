import { SIDEBAR_MENU_OPTION } from "../../types/redux/reducers/appDataState"
import { AppThunk } from "../../types/redux/store"

import { setNavigationSidebar as setNavSideBar } from "../reducers/appDataSlice"

export const setNavigationSideBar =
    (sideBarOption: SIDEBAR_MENU_OPTION): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(setNavSideBar(sideBarOption))
        } catch (err) {
            console.warn(`setNavigationSideBar: Thunk failed - ${err}`)
        }
    }