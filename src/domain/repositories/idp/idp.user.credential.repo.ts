import { Result } from "../../../utils/result.ts";
import { UserCredentialCreateRequest } from "../../models/idp/credential.request.model.ts";

export interface IdpUserCredentialRepo {
  register(cred: UserCredentialCreateRequest): Promise<void>;
  delete(userId: string): Promise<void>;
  deleteSafe(userId: string): Promise<Result<unknown>>;
}
