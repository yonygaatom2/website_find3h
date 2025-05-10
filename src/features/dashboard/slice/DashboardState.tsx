import { ProfileData } from "../../../cores/utils/enums/ProfileData";
import { StateStatus } from "../../../cores/utils/enums/StateStatus";

export interface DashboardState {
    pageIndex: number,
    status?: StateStatus | null,
    errorMessage?: string | null,
    profile?: ProfileData | null,
}