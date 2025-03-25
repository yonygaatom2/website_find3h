import { SearchState } from "./SearchState";
import { createSlice } from "@reduxjs/toolkit";
import { StateStatus } from "../../../cores/utils/enums/StateStatus";

const initialState: SearchState = {
    searchData: null,
    errorMessage: null,
    status: StateStatus.initializeInProgress,
}

const SearchSlice = createSlice({
    initialState,
    name: "SearchSlice",
    reducers: {
        validSearchData: (state: SearchState) => {
            
        }
    }
})

export default SearchSlice.reducer