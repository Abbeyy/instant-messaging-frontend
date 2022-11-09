import { configureStore } from '@reduxjs/toolkit'
import UsersReducer from './reducers/usersSlice'

import CurrentUserReducer from './reducers/currentUserSlice'
import MessageHistoryReducer from './reducers/messageHistorySlice'
import AppDataReducer from './reducers/appDataSlice'

export const store = configureStore({
    reducer: {
        appData: AppDataReducer,
        users: UsersReducer,
        currentUser: CurrentUserReducer,
        messageHistory: MessageHistoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
