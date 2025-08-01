import { NextResponse } from "next/server";
import { readJsonFile, loadLocalImage, markMapImage } from "@/utils/general";
import jwt from "jsonwebtoken";

if(!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");
const SECRET = process.env.JWT_SECRET;

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const token = searchParams.get("t");

        if(!token) {
            return NextResponse.json({ error: "Invalid token" }, { status: 400 });
        };
    
        let decoded: any;
        try {
            decoded = jwt.verify(token, SECRET ?? "") as unknown as {
                x: string;
                y: string;
                map: string;
            };
        } catch (error) {
            return NextResponse.json({ error: "Invalid token" }, { status: 400 });
        };

        const { x, y, map } = decoded;
        const parsedX = parseInt(x);
        const parsedY = parseInt(y);

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
