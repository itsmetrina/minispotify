import { useAuthStore } from "../store/useAuthStore";
import { SPOTIFY_BASE_URL } from "./config";

export const spotifyFetch = async (
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: any
) => {
    const spotifyApi = SPOTIFY_BASE_URL;
    const token = useAuthStore.getState().accessToken;
    // const token = 'BQBXhb5jPtjBtfLwhMlD2J-82n3mMlwT5g_dy1W6yztCXdt6tTZoN2LsYiRSkGu5JxikKKETUVtRcrsDb4BqBlYmO0IZHjOXG1wLT7OkfZwE_nyiu7852St0EsNob1AxSr_AKHW73inDnQ9XUiwJKfElM9AyEqrbWfLtQAXc63OKNNDhpH9EqsuMmKg6dPbcgFFuDX4EEkIoyf7xubcH9yVTsp_lpP5Jlu90DrhtSy1BA5pdM8pph_KuDmUj5v0llxa621DKQkbHoSkFcLZ93W3-UzjVz6H_NGgKBeVqCNQrkRDJBYrpyPOUm7wz-39g';

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