import { DashboardState } from "./DashboardState";
import { StateStatus } from "../../../cores/utils/enums/StateStatus";
import { ProfileData } from "../../../cores/utils/enums/ProfileData";
import { ErrorMessages } from "../../../cores/utils/constants/ErrorMessages";
import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProfile } from "../../profile/repository/ProfileRepo";

const initialState: DashboardState = {
    pageIndex: 0,
    profile: null,
    errorMessage: null,
    status: StateStatus.initializeInProgress,
}

export const initializeDashboard = createAsyncThunk(
    '/profile/getCurrentProfile/',
    async (): Promise<ProfileData | null> => {
        try {
            return await getProfile()
        } catch (e) {
            throw e
        }
    }
)

const DashboardSlice = createSlice({
    name: 'DashboardSlice',
    initialState,
    reducers: {
        changeScreen: (state: DashboardState, action: PayloadAction<number>) => {
            state.errorMessage = null
            state.pageIndex = action.payload
            state.status = StateStatus.unknown
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<DashboardState>) => {
        builder.addCase(initializeDashboard.pending, (state: DashboardState) => {
            state.errorMessage = null
            state.status = StateStatus.initializeInProgress
        }).addCase(initializeDashboard.fulfilled, (state: DashboardState, action: PayloadAction<ProfileData | null>) => {
            state.profile = action.payload
            state.status = StateStatus.initializeSuccess
        }).addCase(initializeDashboard.rejected, (state: DashboardState) => {
            state.errorMessage = ErrorMessages.FRIENDLY
            state.status = StateStatus.initializeFailed
        });
    }
})

export default DashboardSlice.reducer
export const { changeScreen } = DashboardSlice.actions