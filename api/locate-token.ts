const BASE_URL = "http://localhost:3000";

async function getLocationToken(map: string, x: string, y: string): Promise<any> {
    const locateUrl = `${BASE_URL}/api/locate-token`;

    const headers = new Headers({
        "Content-Type": "application/json",
        "key": process.env.LOCATE_KEY as string
    });

    const response = await fetch(locateUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({ map, x, y })
    });

    if(!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }

    const { token } = await response.json();
    return token;
};

export {
    getLocationToken
};