import { create } from "zustand";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";
import type { UserProfile, TopTracks, TopArtists, RecentlyPlayedTracks, FollowedArtists, SavedTracks, SavedShows, Playlists, Queue, CurrentlyPlayingTrack, Devices, PlaybackState, SavedEpisodes, SavedAudiobooks, SavedAlbums } from "../types/spotify_data";


interface UserState {
    userProfile: UserProfile | null;
    topTracks: TopTracks | null;
    topArtists: TopArtists | null;
    followedArtists: FollowedArtists | null;
    savedTracks: SavedTracks | null;
    savedShows: SavedShows | null;
    playlists: Playlists | null;
    recentlyPlayed: RecentlyPlayedTracks | null;
    queue: Queue | null;
    currentlyPlayingTrack: CurrentlyPlayingTrack | null;
    availableDevices: Devices | null;
    playbackState: PlaybackState | null;
    savedEpisodes: SavedEpisodes | null;
    savedAudiobooks: SavedAudiobooks | null;
    savedAlbums: SavedAlbums | null;
    lastFetchedAt: number | null;
    setUserData: (data: Partial<UserState>) => void;
    clearUserData: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            userProfile: null,
            topTracks: null,
            topArtists: null,
            followedArtists: null,
            savedTracks: null,
            savedShows: null,
            playlists: null,
            recentlyPlayed: null,
            queue: null,
            currentlyPlayingTrack: null,
            availableDevices: null,
            playbackState: null,
            savedEpisodes: null,
            savedAudiobooks: null,
            savedAlbums: null,
            lastFetchedAt: null,

            setUserData: (data) =>
                set((state) => ({
                    ...state,
                    ...Object.fromEntries(
                        Object.entries(data).filter(([key]) =>
                            [
                                'userProfile',
                                'topTracks',
                                'topArtists',
                                'followedArtists',
                                'savedTracks',
                                'savedShows',
                                'playlists',
                                'recentlyPlayed',
                                'queue',
                                'currentlyPlayingTrack',
                                'availableDevices',
                                'playbackState',
                                'savedEpisodes',
                                'savedAudiobooks',
                                'savedAlbums'
                            ].includes(key)
                        )
                    ),
                    lastFetchedAt: Date.now(),
                })),

            clearUserData: () =>
                set({
                    userProfile: null,
                    topTracks: null,
                    topArtists: null,
                    recentlyPlayed: null,
                    lastFetchedAt: null,
                }),
        }),
        {
            name: 'user-store',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);