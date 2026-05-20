import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Defer the neon() call until the first DB method runs. Without this, the
// module-load `neon(undefined)` throws during `next build`'s page-data
// collection phase even on pages that opt into `force-dynamic` — Next.js
// still imports the module to read its metadata.
let _db: ReturnType<typeof drizzle<typeof schema>> | undefined;

function getDb(): ReturnType<typeof drizzle<typeof schema>> {
  if (!_db) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set");
    _db = drizzle(neon(url), { schema });
  }
  return _db;
}

export const db = new Proxy({} as ReturnType<typeof drizzle<typeof schema>>, {
  get(_target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  },
});
