import { useAuthStore } from "../store/useAuthStore";
import { SPOTIFY_BASE_URL } from "./config";

export const spotifyFetch = async (
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: any
) => {
    const spotifyApi = SPOTIFY_BASE_URL;
    // const token = useAuthStore.getState().accessToken;
    const token = 'BQDy022d8W0jxD6vVD4LUQiAQvJ0qBh5nB6RaJZSN8dnagh_wziEtaePr-i0Aw4IWf-WUmTx2riAKzM2rxSB6ZREg1O3V8EoPxMGeQ_5aAELaPTv647vDq-9XfYV5MSNQNXDQMTo-YvZRibe36_SqZapzJVeTYzM9ulpliP-zWMSaAbA7FlJ0aB4DvG07MOJQZnYvBk4_KD1V-kg3NEQHkgSCuYSVtAxnCbq9KJhE8AOqCuwmMFtShFNDJTjuAKFq63iFVm_0VvXAVB5h6vlgCXzNccZjAT9Se8xNW8lRMLsEep4zCNWwOcQG9QV3h4-';

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