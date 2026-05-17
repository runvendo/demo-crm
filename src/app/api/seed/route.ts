import { NextResponse } from "next/server";
import { seed } from "@/db/seed";

export async function POST() {
  try {
    await seed();
    return NextResponse.json({ seeded: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ seeded: false, error: message }, { status: 500 });
  }
}
