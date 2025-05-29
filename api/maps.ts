const BASE_URL = "http://localhost:3000";

interface MapData {
    id: number,
    name: string,
    width: number,
    height: number,
    cells: number
};

async function getMaps(limit: number = 1000) {
    if(limit === null) return;

    const mapsUrl = `${BASE_URL}/api/maps?limit=${1000}`;
    try {
        const response = await fetch(mapsUrl);
        if(!response.ok) {
            const error = await response.text();
            throw new Error(error);
        };

        const maps = await response.json() as MapData[];
        return maps;
    } catch (error) {
        throw new Error(`Something went wrong ${error}`);
    };
};

export {
    getMaps
};