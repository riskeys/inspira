import { Transaction } from "../../domain/entities/transaction.entity.ts";
import { TransactionRepo } from "../../domain/repositories/transaction.repo.ts";
import { db } from "../../db/db.ts";
import { transactionsTable } from "../../db/schema.ts";
import { eq } from "drizzle-orm";
import {
  TransactionCreateRequestModel,
  TransactionFilterRequestModel,
} from "../../domain/models/transaction.model.ts";
import { asc, desc } from "drizzle-orm/sql/expressions/select";

export class TransactionPgRepoImpl implements TransactionRepo {
  async get(id: string): Promise<Transaction> {
    const pgid = parseInt(id);
    const items = await db
      .select()
      .from(transactionsTable)
      .where(eq(transactionsTable.id, pgid));

    if (items.length == 0) {
      throw new Error("Not found");
    }
    const entity = items[0];
    return Transaction.instantiate(entity);
  }

  async filter(req: TransactionFilterRequestModel): Promise<Transaction[]> {
    const page = req.page ?? 1;
    const pageSize = req.pageSize ?? 10;
    const sortByAsc = req.sortByAsc ?? true;
    const order = sortByAsc
      ? asc(transactionsTable.createdAt)
      : desc(transactionsTable.createdAt);

    const query = db
      .select()
      .from(transactionsTable);

    const dyn = query.where(eq(transactionsTable.isActive, true)).$dynamic();

    const items = await dyn
      .orderBy(order)
      .limit(pageSize)
      .offset((page - 1) * pageSize);

    return items.map((t) => Transaction.instantiate(t));
  }

  async create(request: TransactionCreateRequestModel): Promise<number> {
    const s = await db
      .insert(transactionsTable)
      .values(request)
      .returning();
    return s[0].id;
  }
}
