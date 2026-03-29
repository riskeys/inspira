import { eq } from "drizzle-orm";
import { db } from "../../../db/db.ts";
import { userRoleTable, userTable } from "../../../db/schema.ts";
import { UserRoleCreateRequestModel } from "../../../domain/models/idp/userrole.request.model.ts";
import { ResultFailed, ResultSuccess } from "../../../utils/result.ts";

export class IdpUserRolePgRepoImpl {
  async create(userrole: UserRoleCreateRequestModel) {
    const data = await db
      .insert(userRoleTable)
      .values(userrole)
      .returning({ id: userTable.id });

    return data[0].id;
  }

  async delete(userId: string) {
    await db.delete(userRoleTable).where(eq(userRoleTable.userId, userId));
  }

  async deleteSafe(userId: string) {
    try {
      await db.delete(userRoleTable).where(eq(userRoleTable.userId, userId));
      return ResultSuccess({});
    } catch (error) {
      console.error(error);
      return ResultFailed(new Error("failed deleting user role"));
    }
  }
}
