import { pgTable, uuid, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";

export const deals = pgTable("deals", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  value: integer("value").notNull(),
  status: varchar("status", { length: 10 }).notNull().default("open"),
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const contacts = pgTable("contacts", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  role: text("role"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
