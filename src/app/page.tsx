import { db } from "@/db";
import { deals } from "@/db/schema";
import { desc } from "drizzle-orm";
import { DealsList } from "@/components/DealsList";

export const dynamic = "force-dynamic";

export default async function DealsPage() {
  const allDeals = await db.select().from(deals).orderBy(desc(deals.createdAt));

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Deals</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track and manage your sales pipeline.
        </p>
      </div>
      <DealsList deals={allDeals} />
    </div>
  );
}
