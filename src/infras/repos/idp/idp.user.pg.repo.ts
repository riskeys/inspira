import { eq } from "drizzle-orm";
import { db } from "../../../db/db.ts";
import { roleTable, userRoleTable, userTable } from "../../../db/schema.ts";
import {
  UserCreateRequestModel,
  UserDeleteRequestModel,
} from "../../../domain/models/idp/user.request.model.ts";
import { IdpUserRepo } from "../../../domain/repositories/idp/idp.user.repo.ts";
import { UserEntity } from "../../../domain/entities/idp/user.entity.ts";
import { Result, ResultFailed, ResultSuccess } from "../../../utils/result.ts";

export class IdpUserPgRepoImpl implements IdpUserRepo {
  async get(id: string) {
    const users = await db
      .select()
      .from(userTable)
      .where(eq(userTable.id, id))
      .leftJoin(userRoleTable, eq(userTable.id, userRoleTable.userId))
      .leftJoin(roleTable, eq(roleTable.id, userRoleTable.roleId));

    if (users.length == 0) {
      console.log("user not found");
      return;
    }

    const roles: string[] = [];
    users.forEach((user) => {
      if (user.idp_roles && user.idp_roles.lowername) {
        roles.push(user.idp_roles.lowername);
      }
    });

    const user = {
      ...users[0].idp_users,
      roles,
    };

    return user;
  }

  async getByEmail(email: string) {
    const users = await db
      .select()
      .from(userTable)
      .where(eq(userTable.email, email))
      .leftJoin(userRoleTable, eq(userTable.id, userRoleTable.userId))
      .leftJoin(roleTable, eq(roleTable.id, userRoleTable.roleId));

    if (users.length == 0) {
      console.log("user not found");
      return;
    }

    const roles: string[] = [];
    users.forEach((user) => {
      if (user.idp_roles && user.idp_roles.lowername) {
        roles.push(user.idp_roles.lowername);
      }
    });

    const user = {
      ...users[0].idp_users,
      roles,
    };

    return user;
  }

  async create(user: UserCreateRequestModel) {
    const userData = await db
      .insert(userTable)
      .values(user)
      .returning({ id: userTable.id });

    return userData[0].id;
  }

  async createSafe(user: UserCreateRequestModel): Promise<Result<string>> {
    try {
      const userData = await db
        .insert(userTable)
        .values(user)
        .returning({ id: userTable.id });

      return ResultSuccess(userData[0].id);
    } catch (error) {
      return ResultFailed(error as Error);
    }
  }

  async delete(req: UserDeleteRequestModel) {
    await db.delete(userTable).where(eq(userTable.id, req.id)).execute();
  }

  async deleteSafe(req: UserDeleteRequestModel) {
    try {
      await db.update(userTable).set({
        status: "deleted",
        // deletedAt: req.deletedAt,
        // deletedBy: req.deletedBy,
      }).where(eq(userTable.id, req.id)).execute();
      return ResultSuccess({});
    } catch (error) {
      console.log(error);
      return ResultFailed(new Error("failed deleting user"));
    }
  }

  async filter(): Promise<UserEntity[]> {
    const users = await db
      .select()
      .from(userTable)
      .where(eq(userTable.status, "active"))
      .limit(10);

    if (users.length == 0) {
      return [];
    }

    return users;
  }
}
