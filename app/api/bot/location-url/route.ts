import { NextResponse } from "next/server";
import { getLocationToken } from "@/lib/locate-token";

const BOT_KEY = process.env.BOT_KEY;

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("auth");

    if (!authHeader || authHeader !== `Bearer ${BOT_KEY}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    };

    const { map, x, y } = await req.json();

    if (!map || !x || !y) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    };

    const token = await getLocationToken(map, x, y);
    const locationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/locate?t=${token}`;

    return NextResponse.json({ locationUrl }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  };
};