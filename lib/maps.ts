import { IMapData } from "@/reducers/interfaces/index";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getMaps(search?: string, limit: number = 1000, offset: number = 0): Promise<IMapData[] | null> {
    if(limit === null) return null;

    const params = new URLSearchParams({
        limit: limit.toString(),
        offset: offset.toString()
    });
    
    if(search) params.append("search", search);

    const mapsUrl = `${BASE_URL}/api/total-maps?${params.toString()}`;

    try {
        const response = await fetch(mapsUrl);
        if(!response.ok) {
            const error = await response.text();
            throw new Error(error);
        };

        const maps = await response.json() as IMapData[];
        return maps;
    } catch (error) {
        throw new Error(`Something went wrong ${error}`);
    };
};

export {
    getMaps
};