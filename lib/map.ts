import { IMapData } from "@/reducers/interfaces/index";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getMap(id?: number, name?: string, slug?: string) {
    if(!id && !name && !slug) return null;
    
    const mapUrl =  `${BASE_URL}/api/map?${id ? "id" : name ? "name" : "slug"}=${id || name || slug}`;

    try {
        const response = await fetch(mapUrl);
        if(!response.ok) {
            const error = await response.text();
            throw new Error(error);
        };

        const map = await response.json() as IMapData;

        return map;
    } catch (error) {
        throw new Error(`Something went wrong ${error}`);
    };
};

export {
    getMap
};