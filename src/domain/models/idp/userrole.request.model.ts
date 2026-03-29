// import { valibot } from "../../../lib/deps.ts";

export interface UserRoleCreateRequestModel {
  userId: string;
  roleId: string;
}

// export const UserRoleCreateRequestSchema = valibot.pipe(
//   valibot.object({
//     username: valibot.string(),
//     fullname: valibot.string(),
//     email: valibot.string(),
//     roles: valibot.optional(valibot.array(valibot.string())),
//   }),
//   valibot.transform((input) => {
//     return {
//       ...input,
//       status: "active",
//       createdAt: new Date(),
//       createdBy: "system dulu",
//     };
//   }),
// );
