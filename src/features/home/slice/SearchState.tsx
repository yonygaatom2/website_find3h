import { SearchModel } from "../../../cores/models/SearchModel";
import { StateStatus } from "../../../cores/utils/enums/StateStatus";

export interface SearchState{
    status: StateStatus,
    errorMessage?: string | null,
    searchData?: SearchModel | null,
}