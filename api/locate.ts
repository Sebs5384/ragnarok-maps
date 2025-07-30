const BASE_URL = "http://localhost:3000";

async function getLocation(token: string): Promise<any> {
    if(!token) return null;
    
    const locateUrl =  `${BASE_URL}/api/locate?t=${token}`;

    try {
        const response = await fetch(locateUrl);
        if(!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }

        const location = await response.json();
        return location;
    } catch (error) {
        throw new Error(`Something went wrong ${error}`);
    }
};

export {
    getLocation
};