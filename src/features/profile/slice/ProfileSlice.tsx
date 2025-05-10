import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "./ProfileState";
import { StateStatus } from "../../../cores/utils/enums/StateStatus";

const initialState: ProfileState = {
    errorMessage: null,
    status: StateStatus.unknown,
}

const ProfileSlice = createSlice({
    name: 'ProfileSlice',
    initialState,
    reducers: {},
})

export default ProfileSlice.reducer
