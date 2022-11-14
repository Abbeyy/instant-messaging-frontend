import { configureStore } from '@reduxjs/toolkit'
import UsersReducer from './reducers/usersSlice'

import CurrentUserReducer from './reducers/currentUserSlice'
import MessageHistoryReducer from './reducers/messageHistorySlice'
import AppDataReducer from './reducers/appDataSlice'
import MessageListReducer from './reducers/messageListSlice'

export const store = configureStore({
    reducer: {
        appData: AppDataReducer,
        users: UsersReducer,
        currentUser: CurrentUserReducer,
        messageHistory: MessageHistoryReducer,
        messageLists: MessageListReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
