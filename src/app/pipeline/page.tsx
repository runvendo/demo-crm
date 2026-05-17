import { db } from "@/db";
import { deals } from "@/db/schema";
import { PipelineTable } from "@/components/PipelineTable";

export const dynamic = "force-dynamic";

export default async function PipelinePage() {
  const allDeals = await db.select().from(deals);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Pipeline</h1>
        <p className="mt-1 text-sm text-gray-500">
          Deals grouped by stage.
        </p>
      </div>
      <PipelineTable deals={allDeals} />
    </div>
  );
}
