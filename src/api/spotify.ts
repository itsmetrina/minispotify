import { useAuthStore } from "../store/useAuthStore";

const spotifyFetch = async (
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: any
) => {
    const options: RequestInit = {
        method,
        headers: {
            Authorization: `Bearer ${useAuthStore((state) => state.accessToken)}`,
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

export const fetchProfile = async () => {
    const response = await spotifyFetch(
        "v1/me",
        "GET"
    );
    return await response;
};

export const getTopTracks = async () => {
    const response = await spotifyFetch(
        "v1/me/top/tracks?time_range=long_term&limit=5",
        "GET"
    );
    return await response.items;
}

export const getByAlbumId = async (id: string) => {
    const response = await spotifyFetch(
        `v1/albums/${id}`,
        "GET"
    );
    return await response.json();
}

export const getByArtistId = async (id: string) => {
    const response = await spotifyFetch(
        `v1/artists/${id}`,
        "GET"
    );
    return await response.json();
}