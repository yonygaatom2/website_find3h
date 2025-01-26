import { createSlice } from "@reduxjs/toolkit";


export interface AppUser {
  username?: string,
}

export const initialState: AppUser | null = null

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setUser: (_: null, action) => {
      return action.payload
    }
  }
})

export default AuthSlice.reducer
export const { setUser } = AuthSlice.actions