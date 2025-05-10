import { SessionModel } from "../../../cores/models/SessionModel";
import { SignInWithEmailModel } from "../../../cores/models/SignInModel";

export const signInWithEmail = async (data: SignInWithEmailModel): Promise<SessionModel | null | undefined> => {
    console.log(data)
   return null
}