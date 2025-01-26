import AuthSlice from './cores/providers/auth/AuthSlice';
import SignInSlice from './features/sign_in/slice/SignInSlice';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

const store: EnhancedStore = configureStore({
    reducer: {
        signIn: SignInSlice,
        auth: AuthSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;