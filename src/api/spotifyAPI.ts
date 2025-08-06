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

export const getDevices = async () => {
    const res = await spotifyFetch(
        `me/player/devices`,
        "GET"
    );
    return res.items;
};

export const transferPlayback = async (deviceId: string) => {
    try {
        await spotifyFetch("me/player", "PUT", {
            device_ids: [deviceId],
            play: true,
        });
        console.log("Transferred playback to device:", deviceId);
    } catch (error) {
        console.error("Failed to transfer playback:", error);
    }
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

export const pausePlayback = async () => {
    try {
        await spotifyFetch("me/player/pause", "PUT");
        console.log("Playback paused");
    } catch (error) {
        console.error("Failed to pause track:", error);
    }
};