import { formatCurrency, formatDate, statusColor } from "@/lib/utils";

interface Deal {
  id: string;
  name: string;
  value: number;
  status: string;
  customerName: string;
  customerEmail: string;
  notes: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export function DealDetail({ deal }: { deal: Deal }) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">{deal.name}</h1>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColor(deal.status)}`}
        >
          {deal.status}
        </span>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
        <div className="px-6 py-4">
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Value
          </label>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(deal.value)}
          </p>
        </div>

        <div className="px-6 py-4">
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Customer
          </label>
          <p className="text-sm text-gray-900">{deal.customerName}</p>
          <p className="text-sm text-gray-500">{deal.customerEmail}</p>
        </div>

        <div className="px-6 py-4">
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
            Notes
          </label>
          <p className="text-sm text-gray-700">{deal.notes || "No notes"}</p>
        </div>

        <div className="px-6 py-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Created
            </label>
            <p className="text-sm text-gray-700">{formatDate(deal.createdAt)}</p>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Last Updated
            </label>
            <p className="text-sm text-gray-700">{formatDate(deal.updatedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
