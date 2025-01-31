import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './cores/providers/auth/AuthSlice';
import SignInSlice from './features/sign_in/slice/SignInSlice';
import SignUpSlice from './features/sign_up/slice/SignUpSlice';
import DashboardSlice from './features/dashboard/slice/DashboardSlice';

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        signUp: SignUpSlice,
        signIn: SignInSlice,
        dashboard: DashboardSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;