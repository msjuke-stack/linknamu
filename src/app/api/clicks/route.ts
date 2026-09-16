import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

const COLLECTION = "linkClicks";

type ClickDoc = {
  _id: string;
  count: number;
};

export async function GET() {
  const db = await getDb();
  const docs = await db.collection<ClickDoc>(COLLECTION).find().toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count ?? 0;
  }

  return NextResponse.json(counts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const id = body?.id;

  if (typeof id !== "string" || id.length === 0) {
    return NextResponse.json({ error: "invalid id" }, { status: 400 });
  }

  const db = await getDb();
  const result = await db
    .collection<ClickDoc>(COLLECTION)
    .findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" }
    );

  return NextResponse.json({ id, count: result?.count ?? 1 });
}
