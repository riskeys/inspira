import { Transaction } from "../entities/transaction.entity.ts";
import {
  TransactionCreateRequestModel,
  TransactionFilterRequestModel,
} from "../models/transaction.model.ts";

export interface TransactionRepo {
  get(id: string): Promise<Transaction>;
  filter(request: TransactionFilterRequestModel): Promise<Transaction[]>;
  create(request: TransactionCreateRequestModel): Promise<number>;
}
