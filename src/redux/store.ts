import { configureStore } from '@reduxjs/toolkit'

import CurrentUserReducer from './reducers/currentUserSlice'

export const store = configureStore({
    reducer: {
        currentUser: CurrentUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
