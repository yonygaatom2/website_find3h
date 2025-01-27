import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './cores/providers/auth/AuthSlice';
import SignInSlice from './features/sign_in/slice/SignInSlice';

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        signIn: SignInSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;