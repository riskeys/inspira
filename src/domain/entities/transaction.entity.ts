import { valibot } from "../../lib/deps.ts";
import {
  TransactionCreateRequestModel,
  TransactionCreateRequestModelSchema,
  TransactionFilterRequestModel,
  TransactionFilterRequestModelSchema,
} from "../models/transaction.model.ts";

export interface TransactionEntity {
  id: number;
  name: string;
  description: string;
  totalAmount: number;
  createdAt: Date;
  createdBy: string;
  isActive: boolean;
}

export class Transaction implements TransactionEntity {
  id: number;
  name: string;
  description: string;
  totalAmount: number;
  createdAt: Date;
  createdBy: string;
  isActive: boolean;

  constructor() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.totalAmount = 0;

    this.createdAt = new Date();
    this.createdBy = "";
    this.isActive = true;
  }

  static instantiate(ent: TransactionEntity) {
    const transaction = new Transaction();

    transaction.id = ent.id;
    transaction.name = ent.name;
    transaction.description = ent.description;
    transaction.totalAmount = ent.totalAmount;
    transaction.createdAt = ent.createdAt;
    transaction.createdBy = ent.createdBy;
    transaction.isActive = ent.isActive;

    return transaction;
  }

  static getFilterRequest(req: unknown): TransactionFilterRequestModel {
    return valibot.parse(TransactionFilterRequestModelSchema, req);
  }

  static getCreateRequest(req: unknown): TransactionCreateRequestModel {
    const parsed = valibot.parse(TransactionCreateRequestModelSchema, req);

    return {
      ...parsed,
      createdAt: new Date(),
      isActive: true,
    };
  }
}
