const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getLocation(map: string, x: string, y: string): Promise<any> {
    if(!map || !x || !y) return null;
        
    const locateUrl =  `${BASE_URL}/api/location-url`;

    try {
        const response = await fetch(locateUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ map, x, y })
        });
            
        if(!response.ok) {
            const error = await response.text();
            throw new Error(error);
        };

        const locationUrl = await response.json();
        return locationUrl;
    } catch (error) {
        throw new Error(`Something went wrong ${error}`);
    };
};

export {
    getLocation
};