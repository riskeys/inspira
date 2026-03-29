import { valibot } from "../../../lib/deps.ts";
import {
  IdpCredentialType,
  IdpProvider,
} from "../../valueObjects/idp/enums.ts";

export interface UserCredentialCreateRequest {
  userId: string;
  type: string;
  secretHash: string;
  provider: IdpProvider;
  createdAt: Date;
  lastLoginAt: Date | null;
}

export const UserCredentialCreateSchema = valibot.pipe(
  valibot.object({
    userId: valibot.string(),
    secretHash: valibot.string(),
  }),
  valibot.transform((input) => {
    return {
      userId: input.userId,
      type: IdpCredentialType.Password.toString(),
      secretHash: input.secretHash,
      provider: IdpProvider.Local,
      createdAt: new Date(),
      lastLoginAt: null,
    };
  }),
);
