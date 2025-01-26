import { SignInState } from "./SignInState";
import { signInUser } from "../repository/SignInRepo";
import { SignInModel } from "../../../cores/models/SignInModel";
import { SessionModel } from "../../../cores/models/SessionModel";
import { StateStatus } from "../../../cores/utils/enums/StateStatus";
import { ErrorMessages } from "../../../cores/utils/constants/ErrorMessages";
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SignInEvent = createAsyncThunk(
    '/sign-in/',
    async (data: SignInModel) => {
        try {
            const response: SessionModel | null = await signInUser(data)
            if (response === null) {
                return
            }
        } catch (error) {
        }
    }
)

export const initialState: SignInState = {
    errorMessage: null,
    status: StateStatus.unknown,
}

const SignInSlice = createSlice({
    name: 'SignInSlice',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<SignInState>) => {
        builder.addCase(SignInEvent.pending, (state: SignInState) => {
            state.errorMessage = null
            state.status = StateStatus.submitInProgress
        }).addCase(SignInEvent.fulfilled, (state) => {
            state.status = StateStatus.submitSuccess
        }).addCase(SignInEvent.rejected, (state) => {
            state.status = StateStatus.submitFailed
            state.errorMessage = ErrorMessages.FRIENDLY
        });
    }
})


export default SignInSlice.reducer