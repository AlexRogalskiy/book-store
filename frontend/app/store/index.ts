import { configureStore } from '@reduxjs/toolkit'
import booksApi from "@/app/store/reducers/books/api/booksApi";


export const store: any = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
    },
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({}).concat(
            booksApi.middleware,
        ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;