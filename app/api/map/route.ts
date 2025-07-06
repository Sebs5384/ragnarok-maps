import { NextResponse } from "next/server";
import { readJsonFile } from "@/utils/general";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        const name = searchParams.get("name");
        const slug = searchParams.get("slug");

        if(!id && !name && !slug) return NextResponse.json({ error: "Invalid params" }, { status: 400 });
        if ([id, name, slug].filter(Boolean).length > 1) {
            return NextResponse.json({ error: "Provide only one search parameter (id, name, or slug)" }, { status: 400 });
        };

        const maps = readJsonFile("maps-meta.json");
        const map = maps.find((m: { id: number; name: string; slug: string; }) => m.id === parseInt(id!) || m.name === name || m.slug === slug); 

        if(!map) return NextResponse.json({ error: "Map not found" }, { status: 404 }); 

        return NextResponse.json(map, { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: `Internal server error ${error}`}), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    };  
};