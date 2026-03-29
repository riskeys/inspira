import { eq } from "drizzle-orm";
import { db } from "../../../db/db.ts";
import { permissionTable } from "../../../db/schema.ts";
import {
  PermissionCreateRequestModel,
  PermissionUpdateRequestModel,
} from "../../../domain/models/idp/perm.request.model.ts";

export class IdpPermissionPgRepoImpl {
  async create(req: PermissionCreateRequestModel) {
    const userData = await db
      .insert(permissionTable)
      .values(req)
      .returning({ id: permissionTable.id });

    return userData[0].id;
  }

  async delete(id: string) {
    await db.delete(permissionTable).where(eq(permissionTable.id, id));
  }

  async get(id: string) {
    const perms = await db
      .select()
      .from(permissionTable)
      .where(eq(permissionTable.id, id));

    if (perms.length == 0) {
      return;
    }

    return perms[0];
  }

  async getByName(name: string) {
    const perms = await db
      .select()
      .from(permissionTable)
      .where(eq(permissionTable.name, name));

    if (perms.length == 0) {
      return;
    }

    return perms[0];
  }
}
