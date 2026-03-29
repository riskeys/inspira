import { eq } from "drizzle-orm";
import { db } from "../../../db/db.ts";
import { credentialTable } from "../../../db/schema.ts";
import { UserCredentialEntity } from "../../../domain/entities/idp/user.credential.entity.ts";
import { IdpUserCredentialRepo } from "../../../domain/repositories/idp/idp.user.credential.repo.ts";
import { UserCredentialCreateRequest } from "../../../domain/models/idp/credential.request.model.ts";
import { ResultFailed, ResultSuccess } from "../../../utils/result.ts";

export class IdpUserCredentialPgRepoImpl implements IdpUserCredentialRepo {
  async register(cred: UserCredentialCreateRequest): Promise<void> {
    await db
      .insert(credentialTable)
      .values(cred);
  }

  async getByUserId(userId: string): Promise<UserCredentialEntity | null> {
    const result = await db
      .select()
      .from(credentialTable)
      .where(eq(credentialTable.userId, userId))
      .limit(1)
      .execute();

    if (result.length === 0) {
      return null;
    }

    return result[0] as UserCredentialEntity;
  }

  async delete(userId: string) {
    await db.delete(credentialTable).where(eq(credentialTable.userId, userId));
  }

  async deleteSafe(userId: string) {
    try {
      await db.delete(credentialTable).where(
        eq(credentialTable.userId, userId),
      );
      return ResultSuccess({});
    } catch (error) {
      console.error(error);
      return ResultFailed(new Error("failed deleting user role"));
    }
  }
}
