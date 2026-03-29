import { DrizzleQueryError, eq } from "drizzle-orm";
import { db } from "../../../db/db.ts";
import { roleTable } from "../../../db/schema.ts";
import {
  RoleCreateRequestModel,
  RoleUpdateRequestModel,
} from "../../../domain/models/idp/role.request.model.ts";
import { Result, ResultFailed, ResultSuccess } from "../../../utils/result.ts";
import { RoleEntity } from "../../../domain/entities/idp/role.entity.ts";

export class IdpRolePgRepoImpl {
  async create(req: RoleCreateRequestModel): Promise<string> {
    const userData = await db
      .insert(roleTable)
      .values(req)
      .returning({ id: roleTable.id });

    return userData[0].id;
  }

  async createSafe(req: RoleCreateRequestModel): Promise<Result<string>> {
    try {
      const userData = await db
        .insert(roleTable)
        .values(req)
        .returning({ id: roleTable.id });

      return ResultSuccess(userData[0].id);
    } catch (error) {
      if (error instanceof DrizzleQueryError) {
        return ResultFailed(error as DrizzleQueryError);
      }
      return ResultFailed(error as Error);
    }
  }

  async update(req: RoleUpdateRequestModel) {
    await db
      .update(roleTable)
      .set(req)
      .where(eq(roleTable.id, req.id));
  }

  async delete(id: string) {
    await db.delete(roleTable).where(eq(roleTable.id, id));
  }

  async get(id: string) {
    const roles = await db
      .select()
      .from(roleTable)
      .where(eq(roleTable.id, id));

    if (roles.length == 0) {
      return;
    }

    return roles[0];
  }

  async getByName(name: string) {
    const roles = await db
      .select()
      .from(roleTable)
      .where(eq(roleTable.name, name));

    if (roles.length == 0) {
      return;
    }

    return roles[0];
  }

  async filter(): Promise<RoleEntity[]> {
    const users = await db
      .select()
      .from(roleTable)
      .limit(10);

    if (users.length == 0) {
      return [];
    }

    return users;
  }
}
