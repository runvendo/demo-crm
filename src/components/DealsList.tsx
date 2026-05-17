import Link from "next/link";
import { formatCurrency, statusColor } from "@/lib/utils";

interface Deal {
  id: string;
  name: string;
  value: number;
  status: string;
  customerName: string;
  customerEmail: string;
  createdAt: Date;
}

export function DealsList({ deals }: { deals: Deal[] }) {
  if (deals.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No deals yet. Seed the database to get started.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Deal
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Value
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {deals.map((deal) => (
            <tr key={deal.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <Link
                  href={`/deals/${deal.id}`}
                  className="text-sm font-medium text-gray-900 hover:text-blue-600"
                >
                  {deal.name}
                </Link>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{deal.customerName}</div>
                <div className="text-xs text-gray-500">{deal.customerEmail}</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {formatCurrency(deal.value)}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColor(deal.status)}`}
                >
                  {deal.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
