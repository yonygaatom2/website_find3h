import { DashboardState } from "./DashboardState";
import { RelationStatus } from "../../../cores/models/GenericeEnums";
import { StateStatus } from "../../../cores/utils/enums/StateStatus";
import { ProfileData } from "../../../cores/utils/enums/ProfileData";
import { GenderOptions } from "../../../cores/utils/enums/GenderOptions";
import { ErrorMessages } from "../../../cores/utils/constants/ErrorMessages";
import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
            return {
                id: 1,
                user: {
                    username: 'Atom Yongya',
                    email: 'atom@gmail.com',
                    gender: GenderOptions.male,
                },
                isOneTimePick: false,
                isPremiumUser: false,
                isPrivate: false,
                createdAt: '',
                partnerProfile: null,
                verified: false,
                userMatchStatus: RelationStatus.unknown,
            }
        } catch {
            return null
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
            // state.status = StateStatus.initializeInProgress
        }).addCase(initializeDashboard.fulfilled, (state: DashboardState, action) => {
            state.status = StateStatus.initializeSuccess
            state.profile = action.payload
        }).addCase(initializeDashboard.rejected, (state: DashboardState) => {
            state.status = StateStatus.initializeFailed
            state.errorMessage = ErrorMessages.FRIENDLY
        });
    }
})

export default DashboardSlice.reducer
export const { changeScreen } = DashboardSlice.actions