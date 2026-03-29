import * as valibot from "@valibot/valibot";

export interface TransactionFilterRequestModel {
  name?: string;
  description?: string;
  totalAmount?: number;
  createdBy?: string;
  isActive?: boolean;

  page?: number;
  pageSize?: number;
  sortByAsc?: boolean;
}

export const TransactionFilterRequestModelSchema = valibot.object({
  name: valibot.optional(valibot.string()),
  description: valibot.optional(valibot.string()),
  totalAmount: valibot.optional(valibot.number()),
  createdBy: valibot.optional(valibot.string()),
  isActive: valibot.optional(valibot.boolean()),

  page: valibot.optional(valibot.number()),
  pageSize: valibot.optional(valibot.number()),
  sortByAsc: valibot.optional(valibot.boolean()),
});

// create

export interface TransactionCreateRequestModel {
  name: string;
  description: string;
  totalAmount: number;
  createdAt: Date;
  createdBy: string;
  isActive: boolean;
}

export const TransactionCreateRequestModelSchema = valibot.object({
  name: valibot.pipe(valibot.string()),
  description: valibot.pipe(valibot.string()),
  totalAmount: valibot.pipe(valibot.number()),
  createdBy: valibot.pipe(valibot.string()),
});
