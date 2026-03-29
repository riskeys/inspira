import {
  AnyPgColumn,
  boolean,
  pgTable,
  real,
  serial,
  text,
  timestamp,
  unique,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { SQL, sql } from "drizzle-orm";

export const transactionsTable = pgTable("transactions", {
  id: serial().primaryKey().notNull(),
  name: varchar().notNull(),
  description: varchar().notNull(),
  totalAmount: real().notNull(),
  createdAt: timestamp({ mode: "date" }).notNull(),
  createdBy: varchar().notNull(),
  isActive: boolean().notNull(),
});

export const permissionTable = pgTable("idp_permissions", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: varchar().notNull(),
  createdAt: timestamp({ mode: "date" }).notNull(),
  createdBy: varchar().notNull(),
});

export const userTable = pgTable("idp_users", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  username: varchar().notNull(),
  fullname: varchar(),
  designation: varchar(),
  phoneNumber: varchar("phone_number"),
  email: varchar().notNull(),
  status: varchar().notNull(),
  createdAt: timestamp({ mode: "date" }).notNull(),
  createdBy: varchar().notNull(),
  updatedAt: timestamp({ mode: "date" }),
  updatedBy: varchar(),
});

export const credentialTable = pgTable("idp_credentials", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  type: varchar().notNull(),
  secretHash: varchar().notNull(),
  provider: varchar().notNull(),
  createdAt: timestamp({ mode: "date" }).notNull(),
  lastLoginAt: timestamp({ mode: "date" }),
});

export const userProfileTable = pgTable("idp_user_profiles", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  username: varchar().notNull(),
  fullname: varchar().notNull(),
  designation: varchar(),
  createdAt: timestamp({ mode: "date" }).notNull(),
  createdBy: varchar().notNull(),
  updatedAt: timestamp({ mode: "date" }).notNull(),
  updatedBy: varchar().notNull(),
});

export const roleTable = pgTable("idp_roles", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  name: varchar().notNull(),
  lowername: varchar()
    .generatedAlwaysAs((): SQL => sql`LOWER(${roleTable.name})`),
  description: text().notNull(),
  permissions: text(),
}, (table) => [
  uniqueIndex("rolenameUniqueIndex").on(lower(table.name)),
]);

export const userRoleTable = pgTable("idp_user_roles", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  roleId: uuid("role_id")
    .notNull()
    .references(() => roleTable.id, { onDelete: "cascade" }),
});

function lower(col: AnyPgColumn): SQL {
  return sql`lower(${col})`;
}
