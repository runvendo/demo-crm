import { db } from "@/db";
import { deals } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { DealDetail } from "@/components/DealDetail";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DealPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [deal] = await db.select().from(deals).where(eq(deals.id, id));

  if (!deal) {
    notFound();
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          &larr; Back to deals
        </Link>
      </div>
      <DealDetail deal={deal} />
    </div>
  );
}
