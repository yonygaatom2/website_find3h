import { StateStatus } from "../../../cores/utils/enums/StateStatus";

export interface SignUpState{
    status: StateStatus,
    errorMessage?: string | null,
}
