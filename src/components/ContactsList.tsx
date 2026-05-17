interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  role: string | null;
}

export function ContactsList({ contacts }: { contacts: Contact[] }) {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No contacts yet. Seed the database to get started.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contacts.map((contact) => (
            <tr key={contact.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {contact.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {contact.email}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {contact.phone || "\u2014"}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {contact.company || "\u2014"}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {contact.role || "\u2014"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
