import { IdpProvider } from "../../valueObjects/idp/enums.ts";

export interface UserCredentialEntity {
  id: string;
  userId: string;
  type: string;
  secretHash: string;
  provider: IdpProvider.Local;
  createdAt: Date;
  lastLoginAt: Date | null;
}
