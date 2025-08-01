import { NextResponse } from "next/server";
import { readJsonFile } from "@/utils/general";


export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const limit = searchParams.get("limit");
        const offset = searchParams.get("offset");
        const search = searchParams.get("search");

        if(!limit || isNaN(parseInt(limit))) {
            return NextResponse.json({ error: "Invalid limit"}, { status: 400 });
        };

        if(!offset || isNaN(parseInt(offset))) {
            return NextResponse.json({ error: "Invalid offset"}, { status: 400 });
        };

        let maps = readJsonFile("maps-meta.json");

        if(search) {
            const searchLower = search.toLowerCase();
            maps = maps.filter((map: { name: string; }) => map.name?.toLowerCase().includes(searchLower));
        };

        const paginatedMaps = maps.slice(parseInt(offset), parseInt(limit) + parseInt(offset));

        return new NextResponse(JSON.stringify(paginatedMaps), {
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
