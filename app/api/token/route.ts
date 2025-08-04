import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {  
    try {
        const SECRET = process.env.JWT_SECRET;
        const key = req.headers.get("key")
        if(key !== process.env.LOCATE_KEY) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        };

        if (!SECRET) {
            console.error("JWT_SECRET is missing!");
            return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
        };

        const body = await req.json();
        const { map, x, y } = body;

        if (
            typeof map !== "string" ||
            typeof x !== "string" ||
            typeof y !== "string"
        ) {
            return NextResponse.json(
                { error: "Invalid payload" },
                { status: 400 }
            );
        };

        const payload = { map, x, y };
        const token = jwt.sign(payload, SECRET ?? "", { expiresIn: "10m" });

        return NextResponse.json({ token });
    } catch (error) {
        console.error("Token generation error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    };
};