import { valibot } from "../../../lib/deps.ts";

export interface UserCreateRequestModel {
  username: string;
  fullname: string;
  designation?: string;
  email: string;
  status: string;
  createdAt: Date;
  createdBy: string;
  roles?: string[];
}

export const UserCreateRequestSchema = valibot.pipe(
  valibot.object({
    username: valibot.string(),
    fullname: valibot.string(),
    designation: valibot.optional(valibot.string()),
    email: valibot.string(),
    roles: valibot.optional(
      valibot.union([valibot.string(), valibot.array(valibot.string())]),
    ),
  }),
  valibot.transform((input) => {
    const roles = [];

    if (input.roles && typeof (input.roles) === "string") {
      roles.push(input.roles);
    } else if (input.roles) {
      roles.push(...input.roles);
    }

    return {
      username: input.username,
      fullname: input.fullname,
      designation: input.designation,
      email: input.email,
      roles: roles,
      status: "active",
      createdAt: new Date(),
      createdBy: "system dulu",
    };
  }),
);

export interface UserDeleteRequestModel {
  id: string;
  deletedAt: Date;
  deletedBy: string;
}
