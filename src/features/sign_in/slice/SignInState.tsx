import { StateStatus } from "../../../cores/utils/enums/StateStatus";

export interface SignInState {
    status: StateStatus,
    errorMessage?: string | null,
}
