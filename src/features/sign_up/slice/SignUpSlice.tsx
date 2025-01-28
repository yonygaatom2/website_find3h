import { SignUpState } from "./SignUpState";
import { StateStatus } from "../../../cores/utils/enums/StateStatus";
import { SignUpWithEmailModel } from "../../../cores/models/SignUpEmailModel";
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: SignUpState = {
    status: StateStatus.unknown,
}

export const SignUpWithEmail = createAsyncThunk(
    '/sign-up/email/',
    async (data: SignUpWithEmailModel): Promise<boolean> => {
        console.log(data)
        return true
    }
)
const SignUpSlice = createSlice({
    name: "SignUpSlice",
    initialState,
    reducers: {
        resetSignUpState: (_) => initialState
    },
    extraReducers: (builder: ActionReducerMapBuilder<SignUpState>) => {
        builder.addCase(SignUpWithEmail.pending, (state: SignUpState) => {
            state.errorMessage = null
            state.status = StateStatus.signUpInProgress
        }).addCase(SignUpWithEmail.fulfilled, (state: SignUpState) => {
            state.status = StateStatus.signUpSuccess
        }).addCase(SignUpWithEmail.rejected, (state: SignUpState) => {
            state.status = StateStatus.signUpFailed
        });
    }
})

export default SignUpSlice.reducer
export const { resetSignUpState } = SignUpSlice.actions