import { AuthState } from "./AuthState";
import { SignInModel } from "../../models/SignInModel";
import { SessionModel } from "../../models/SessionModel";
import { signInUser } from "../../repositories/auth/AuthRepo";
import { ErrorMessages } from "../../utils/constants/ErrorMessages";
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SignInEvent = createAsyncThunk(
  '/sign-in/',
  async (data: SignInModel, _): Promise<boolean> => {
    try {
      const response: SessionModel | null = await signInUser(data)
      if (response === null) {
        return true
      }

      return true
    } catch (error) {
      return false
    }
  }
)

const initialState: AuthState | null = {
  isLoggedIn: false,
}

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder.addCase(SignInEvent.pending, (state: AuthState) => {
      state.isLoggedIn = false
      state.errorMessage = null
    }).addCase(SignInEvent.fulfilled, (state) => {
      state.isLoggedIn = true
    }).addCase(SignInEvent.rejected, (state) => {
      state.isLoggedIn = false
      state.errorMessage = ErrorMessages.FRIENDLY
    });
  }
})

export default AuthSlice.reducer