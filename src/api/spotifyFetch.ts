import { useAuthStore } from "../store/useAuthStore";
import { SPOTIFY_BASE_URL } from "./config";

export const spotifyFetch = async (
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: any
) => {
    const spotifyApi = SPOTIFY_BASE_URL;
    const token = useAuthStore.getState().accessToken;

    if(!token) throw new Error("No access token found. Please authenticate first.");
    const options: RequestInit = {
        method,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    };

    if (body && method !== "GET") {
        options.body = JSON.stringify(body);
    }

    const res = await fetch(`${spotifyApi}${endpoint}`, options);

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Spotify API Error: ${res.status} - ${errorText}`);
    }

    return await res.json();
}