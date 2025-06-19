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

export const getFollowedArtists = async (limit: number) => {
    const res = await spotifyFetch(
        `me/following?type=artist&limit=${limit}`,
        "GET"
    );
    return res.artists.items;
};

export const getSavedTracks = async (limit: number) => {
    const res = await spotifyFetch(
        `me/tracks?limit=${limit}`,
        "GET"
    );
    return res.items;
};

export const getSavedShows = async (limit: number) => {
    const res = await spotifyFetch(
        `me/shows?limit=${limit}`,
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

export const getRecentlyPlayed = async (limit: number) => {
    const res = await spotifyFetch(
        `me/player/recently-played?limit=${limit}`,
        "GET"
    );
    return res.items;
};

export const getQueue = async () => {
    const res = await spotifyFetch(
        "me/player/queue",
        "GET"
    );
    return res.queue;
};

export const getCurrentlyPlaying = async () => {
    return await spotifyFetch(
        "me/player/currently-playing",
        "GET"
    );
};

export const getAvailableDevices = async () => {
    const res = await spotifyFetch(
        "me/player/devices",
        "GET"
    );
    return res.devices;
};

export const getPlaybackState = async () => {
    return await spotifyFetch(
        "me/player",
        "GET"
    );
};

export const getSavedEpisodes = async (limit: number) => {
    const res = await spotifyFetch(
        `me/episodes?limit=${limit}`,
        "GET"
    );
    return res.items;
};

export const getSavedAudiobooks = async (limit: number) => {
    const res = await spotifyFetch(
        `me/audiobooks?limit=${limit}`,
        "GET"
    );
    return res.items;
};

export const getSavedAlbums = async (limit: number) => {
    const res = await spotifyFetch(
        `me/albums?limit=${limit}`,
        "GET"
    );
    return res.items;
};