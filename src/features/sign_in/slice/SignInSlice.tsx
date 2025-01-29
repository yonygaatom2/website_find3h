import { SignInState } from "./SignInState";
import { createSlice } from "@reduxjs/toolkit";
import { StateStatus } from "../../../cores/utils/enums/StateStatus";


export const initialState: SignInState = {
    errorMessage: null,
    status: StateStatus.unknown,
}

const SignInSlice = createSlice({
    name: 'SignInSlice',
    initialState,
    reducers: {},
})


export default SignInSlice.reducer