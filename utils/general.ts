import { createCanvas, loadImage } from "canvas";
import fs from "fs";
import path from "path";

function readJsonFile(fileName: string): any {
    const filePath = path.join(process.cwd(), "data", fileName);
    const fileData = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(fileData);
};

async function loadLocalImage(folder: string, fileName: string): Promise<any> {
    const filePath = path.join(process.cwd(), "public", folder, fileName);
    
    return await loadImage(filePath);
};

function markMapImage(
    mapImage: any,
    cordinateX: number,
    cordinateY: number,
    imageWidth: number, 
    imageHeight: number, 
    mapWidth: number, 
    mapHeight: number, 
    fillStyle: string, 
    fileExtension: any,
    context: any
) {
    const canvas = createCanvas(imageWidth, imageHeight);
    const ctx = canvas.getContext(context);
    const scaleX = canvas.width / mapWidth;
    const scaleY = canvas.height / mapHeight;

    const dotX = cordinateX * scaleX;
    const dotY = (mapHeight - 1 - cordinateY) * scaleY;
    
    ctx.drawImage(mapImage, 0, 0);
    ctx.beginPath();
    ctx.arc(dotX, dotY, 3, 0, 2 * Math.PI);
    ctx.fillStyle = fillStyle;
    ctx.fill();

    return canvas.toBuffer(fileExtension);
};

export {
    readJsonFile,
    loadLocalImage,
    markMapImage
};