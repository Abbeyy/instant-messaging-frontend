import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDataState } from "../../types/redux/reducers/appDataState"

export const initialState: AppDataState = {
    isLoading: false
}

export const AppDataSlice = createSlice({
    name: 'appData',
    initialState,
    reducers: {
        setAppIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
    },
})

export const { 
    setAppIsLoading,
 } = AppDataSlice.actions

 export default AppDataSlice.reducer