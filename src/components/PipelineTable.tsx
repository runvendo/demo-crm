import { formatCurrency, statusColor } from "@/lib/utils";

interface Deal {
  id: string;
  name: string;
  value: number;
  status: string;
  customerName: string;
}

const statusOrder = ["open", "won", "lost"] as const;
const statusLabels: Record<string, string> = {
  open: "Open",
  won: "Won",
  lost: "Lost",
};

export function PipelineTable({ deals }: { deals: Deal[] }) {
  if (deals.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No deals in the pipeline yet.</p>
      </div>
    );
  }

  const grouped = statusOrder.map((status) => ({
    status,
    label: statusLabels[status],
    deals: deals.filter((d) => d.status === status),
    total: deals
      .filter((d) => d.status === status)
      .reduce((sum, d) => sum + d.value, 0),
  }));

  return (
    <div className="space-y-6">
      {grouped.map((group) => (
        <div key={group.status}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor(group.status)}`}
              >
                {group.label}
              </span>
              <span className="text-sm text-gray-500">
                {group.deals.length} deal{group.deals.length !== 1 ? "s" : ""}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-700">
              {formatCurrency(group.total)}
            </span>
          </div>

          {group.deals.length > 0 ? (
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {group.deals.map((deal) => (
                    <tr key={deal.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 text-sm font-medium text-gray-900">
                        {deal.name}
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-500">
                        {deal.customerName}
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-900 text-right">
                        {formatCurrency(deal.value)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-sm text-gray-400 py-2 px-4">
              No deals in this stage.
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
