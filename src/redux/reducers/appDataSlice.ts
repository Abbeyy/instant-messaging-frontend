import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDataState, SIDEBAR_MENU_OPTION } from "../../types/redux/reducers/appDataState"

export const initialState: AppDataState = {
    isLoading: false,
    nav: {
        sideBar: SIDEBAR_MENU_OPTION.MESSAGES,
        messages: {
            chatRecipientId: ''
        }
    }
}

export const AppDataSlice = createSlice({
    name: 'appData',
    initialState,
    reducers: {
        setAppIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setNavigationSidebar: (state, action: PayloadAction<SIDEBAR_MENU_OPTION>) => {
            state.nav.sideBar = action.payload
        },
        setMessagesChatRecipientId: (state, action: PayloadAction<string>) => {
            state.nav.messages.chatRecipientId = action.payload
        },
    },
})

export const { 
    setAppIsLoading,
    setNavigationSidebar,
    setMessagesChatRecipientId
 } = AppDataSlice.actions

 export default AppDataSlice.reducer