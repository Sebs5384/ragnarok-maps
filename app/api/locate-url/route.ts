import { NextResponse } from "next/server";
import { getLocationToken } from "@/api/locate-token";

const BASE_URL = "http://localhost:3000";

export async function POST(req: Request) {
    try {
        const { map, x, y } = await req.json();

        if( !map || !x || !y ) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

        const token = await getLocationToken(map, x, y);
        const locationUrl = `${BASE_URL}/api/locate?t=${token}`

        return NextResponse.json({ locationUrl }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    };
};