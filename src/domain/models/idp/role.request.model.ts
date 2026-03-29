import { valibot } from "../../../lib/deps.ts";

export interface RoleCreateRequestModel {
  name: string;
  permission: string | null;
  description: string;
}

export interface RoleUpdateRequestModel {
  id: string;
  name: string;
  permission?: string;
  description?: string;
}

export const RoleCreateRequestSchema = valibot.pipe(
  valibot.object({
    name: valibot.string(),
    permission: valibot.optional(valibot.string()),
    description: valibot.string(),
  }),
  valibot.transform((input) => {
    return {
      name: input.name,
      description: input.description,
      permission: input.permission ?? null,
    };
  }),
);
