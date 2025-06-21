import { useAuthStore } from "../store/useAuthStore";
import { SPOTIFY_BASE_URL } from "./config";

export const spotifyFetch = async (
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: any
) => {
    const spotifyApi = SPOTIFY_BASE_URL;
    const token = useAuthStore.getState().accessToken;
    // const token = 'BQAjO3tD5iCZLE5SRcOYR00Qr6SfMocQih1Pv4q-q2EggsvWNJRNhuoEn_8CGQcp2pTtylhDA1WUAe7RynzOdUZ40pZOqJC68Z5uU2aOPKTtYDZb_qnt9skP-gZaYpU9F5SnNGgoQi8H4r6S8IpbCEsv2T0EXHME3Vvsshj0CoWIw9M39X5wEFGlNhICnOk-Ks0jfiA3mjY4AA7MMA5JMjkmCmZOdfCtDrcsjHWVcGfKBSoyPjvpjsuwEyfsThjWrsoC_4MF6Q7fFwIOovKzBDwzBVusKkgun_qSZuaKu7lzR_LRvipYIofPuJJ0OVMr';

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