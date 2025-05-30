import { NextResponse } from "next/server";
import { readJsonFile } from "../../../utils/general";


export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const limit = searchParams.get("limit");

        if(!limit || isNaN(parseInt(limit))) {
            return NextResponse.json({ error: "Invalid limit"}, { status: 400 });
        };

        const maps = readJsonFile("maps-meta.json").slice(0, parseInt(limit || "0"));

        return new NextResponse(JSON.stringify(maps), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    };
};
