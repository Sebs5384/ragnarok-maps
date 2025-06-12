import { IMapsData } from "../reducers/interfaces/index";

const BASE_URL = "http://localhost:3000";

async function getMaps(limit: number = 1000, offset: number = 0): Promise<IMapsData[] | null> {
    if(limit === null) return null;

    const mapsUrl = `${BASE_URL}/api/maps?limit=${limit}&offset=${offset}`;
    try {
        const response = await fetch(mapsUrl);
        if(!response.ok) {
            const error = await response.text();
            throw new Error(error);
        };

        const maps = await response.json() as IMapsData[];
        return maps;
    } catch (error) {
        throw new Error(`Something went wrong ${error}`);
    };
};

export {
    getMaps
};