import { spotifyFetch } from "./spotifyFetch";

export const getProfile = async () => {
    const response = await spotifyFetch(
        "me",
        "GET"
    );
    return await response;
};

export const getTopTracks = async (limit: number) => {
    const res = await spotifyFetch(
        `me/top/tracks?time_range=long_term&limit=${limit}`,
        "GET"
    );
    return res.items;
};

export const getTopArtists = async (limit: number) => {
    const res = await spotifyFetch(
        `me/top/artists?time_range=long_term&limit=${limit}`,
        "GET"
    );
    return res.items;
};

export const getPlaylists = async (limit: number) => {
    const res = await spotifyFetch(
        `me/playlists?limit=${limit}`,
        "GET"
    );
    return res.items;
};

export const playTrack = async (trackUri: string) => {
    try {
        await spotifyFetch("me/player/play", "PUT", {
            uris: [trackUri],
        });
        console.log("Playback started");
    } catch (error) {
        console.error("Failed to play track:", error);
    }
};