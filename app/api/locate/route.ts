import { NextResponse } from "next/server";
import { readJsonFile, loadLocalImage, markMapImage } from "../../../utils/general";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const map = searchParams.get("map");
        const x = searchParams.get("x");
        const y = searchParams.get("y");

        const parsedX = parseInt(x || "");
        const parsedY = parseInt(y || "");
    
        if(!map) {
            return NextResponse.json({ error: "Invalid map"}, { status: 400 });
        };

        if(isNaN(parsedX) || isNaN(parsedY)) {
            return NextResponse.json({ error: "invalid coordinates" }, { status: 400 });
        };
        const mapImage = await loadLocalImage("maps", `${map}.png`);
        const mapMeta = readJsonFile("maps-meta.json");
        const mapData = mapMeta.find((m: { name: string }) => m.name === map);
        const markedMap = markMapImage(
            mapImage,
            parsedX,
            parsedY,
            mapImage.width,
            mapImage.height,
            mapData.width,
            mapData.height,
            "red",
            "image/png",
            "2d"
        );

        return new NextResponse(markedMap, {
            status: 200,
            headers: {
                "Content-Type": "image/png",
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            }
        });
    };
};
