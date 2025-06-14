import { SPOTIFY_ACCESS_TOKEN } from "./config";

const spotifyFetch = async (
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: any
) => {
    const options: RequestInit = {
        method,
        headers: {
            Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
        },
    };

    if (body && method !== "GET") {
        options.body = JSON.stringify(body);
    }

    const res = await fetch(`https://api.spotify.com/${endpoint}`, options);

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Spotify API Error: ${res.status} - ${errorText}`);
    }

    return await res.json();
}

export const getTopTracks = async () => {
    const response = await spotifyFetch(
        "v1/me/top/tracks?time_range=long_term&limit=5",
        "GET"
    );
    return response.items;
};