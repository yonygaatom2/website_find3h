import { StateStatus } from "../../../cores/utils/enums/StateStatus";

export interface ProfileState {
    status: StateStatus,
    errorMessage?: string | null,
}