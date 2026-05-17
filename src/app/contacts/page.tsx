import { db } from "@/db";
import { contacts } from "@/db/schema";
import { desc } from "drizzle-orm";
import { ContactsList } from "@/components/ContactsList";

export const dynamic = "force-dynamic";

export default async function ContactsPage() {
  const allContacts = await db
    .select()
    .from(contacts)
    .orderBy(desc(contacts.createdAt));

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Contacts</h1>
        <p className="mt-1 text-sm text-gray-500">
          Your customer directory.
        </p>
      </div>
      <ContactsList contacts={allContacts} />
    </div>
  );
}
