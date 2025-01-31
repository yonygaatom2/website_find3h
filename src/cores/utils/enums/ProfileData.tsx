import { AppUser } from "../../models/AppUser";
import { RelationStatus } from "../../models/GenericeEnums";

export interface ProfileData {
    id: number
    user: AppUser
    verified: boolean
    isPrivate: boolean
    isOneTimePick: boolean
    isPremiumUser: boolean
    userMatchStatus: RelationStatus,
    //  profileImage: ;
    createdAt: string;
    updatedAt?: string | null;
    partnerProfile?: number | null;
}