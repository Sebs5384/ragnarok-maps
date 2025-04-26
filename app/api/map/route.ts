import { createCanvas, loadImage } from "canvas";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const x = searchParams.get("x");
    const y = searchParams.get("y");

    const parsedX = parseInt(x || "");
    const parsedY = parseInt(y || "");

    if(isNaN(parsedX) || isNaN(parsedY)) {
        return NextResponse.json({ error: "invalid coordinates" }, { status: 400 });
    };

    try {
        const mapPath = path.join(process.cwd(), "public", "gonryun.png");
        const markerPath = path.join(process.cwd(), "public", "PROSEN.png");
        const mapImage = await loadImage(mapPath);
        const markerImage = await loadImage(markerPath);

        const canvas = createCanvas(mapImage.width, mapImage.height);
        const ctx = canvas.getContext("2d");

        const mapWidth = 300;
        const mapHeight = 300;
        const scaleX = canvas.width / mapWidth;
        const scaleY = canvas.height / mapHeight;

        const dotX = parsedX * scaleX;
        const dotY = (mapHeight - 1 - parsedY) * scaleY;

        ctx.drawImage(mapImage, 0, 0);
        ctx.drawImage(markerImage, dotX - 12.5, dotY - 12.5, 25, 25);

        const buffer = canvas.toBuffer("image/png");

        return new NextResponse(buffer, {
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
