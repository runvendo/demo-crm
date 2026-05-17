import { db } from "./index";
import { deals, contacts } from "./schema";

const sampleDeals = [
  {
    name: "Enterprise Platform Migration",
    value: 120000,
    status: "open",
    customerName: "Sarah Chen",
    customerEmail: "sarah.chen@acmecorp.com",
    notes: "Q2 budget approved. Needs SSO integration.",
  },
  {
    name: "Annual SaaS License Renewal",
    value: 48000,
    status: "won",
    customerName: "Marcus Johnson",
    customerEmail: "marcus@streamline.io",
    notes: "Renewed for 3 years with 10% discount.",
  },
  {
    name: "Data Analytics Add-on",
    value: 35000,
    status: "open",
    customerName: "Priya Patel",
    customerEmail: "priya.patel@novahq.com",
    notes: "Waiting on security review from their IT team.",
  },
  {
    name: "Startup Growth Plan",
    value: 15000,
    status: "lost",
    customerName: "Jake Morrison",
    customerEmail: "jake@launchpad.dev",
    notes: "Went with competitor due to pricing.",
  },
  {
    name: "Custom Integration Package",
    value: 72000,
    status: "won",
    customerName: "Elena Rodriguez",
    customerEmail: "elena.r@globalfin.com",
    notes: "Signed after successful POC. Deploying next month.",
  },
];

const sampleContacts = [
  {
    name: "Sarah Chen",
    email: "sarah.chen@acmecorp.com",
    phone: "+1 (415) 555-0142",
    company: "Acme Corp",
    role: "VP of Engineering",
  },
  {
    name: "Marcus Johnson",
    email: "marcus@streamline.io",
    phone: "+1 (212) 555-0198",
    company: "Streamline",
    role: "CTO",
  },
  {
    name: "Priya Patel",
    email: "priya.patel@novahq.com",
    phone: "+1 (650) 555-0167",
    company: "Nova HQ",
    role: "Head of Product",
  },
  {
    name: "Jake Morrison",
    email: "jake@launchpad.dev",
    phone: "+1 (310) 555-0123",
    company: "Launchpad",
    role: "Founder & CEO",
  },
  {
    name: "Elena Rodriguez",
    email: "elena.r@globalfin.com",
    phone: "+1 (305) 555-0189",
    company: "GlobalFin",
    role: "Director of Operations",
  },
];

export async function seed() {
  await db.delete(deals);
  await db.delete(contacts);
  await db.insert(deals).values(sampleDeals);
  await db.insert(contacts).values(sampleContacts);
}
