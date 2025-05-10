import { AuthState } from "./AuthState";
import { SessionModel } from "../../models/SessionModel";
import { SignInWithEmailModel } from "../../models/SignInModel";
import { StorageKeys } from "../../utils/constants/StorageKeys";
import { signInWithEmail } from "../../repositories/auth/AuthRepo";
import { ErrorMessages } from "../../utils/constants/ErrorMessages";
import { setStringValueAtSS } from "../../services/storages/SessionStorage";
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStringValueFromLS, setStringValueAtLS } from "../../services/storages/LocalStorage";

const initialState: AuthState | null = {
  isLoggedIn: false,
}


export const SignInEvent = createAsyncThunk(
  '/sign-in/',
  async (data: SignInWithEmailModel, _): Promise<boolean> => {
    try {
      const response: SessionModel | null = await signInWithEmail(data)
      if (response === null) {
        throw Error(ErrorMessages.FRIENDLY)
      }

      console.log(response)
      setStringValueAtLS({ key: StorageKeys.REFRESH_TOKEN_KEY, value: response.refresh })
      setStringValueAtSS({ key: StorageKeys.ACCESS_TOKEN_KEY, value: response.access })
      return true
    } catch (error) {
      throw error
    }
  }
)

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    initializeAuth: (state: AuthState) => {
      const refreshToken: string | null = getStringValueFromLS({ key: StorageKeys.REFRESH_TOKEN_KEY })
      if (refreshToken !== null && refreshToken !== '') {
        state.isLoggedIn = true
        state.errorMessage = null
      }
    }
  },
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
export const {initializeAuth} = AuthSlice.actions