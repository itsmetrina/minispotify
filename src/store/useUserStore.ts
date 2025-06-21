import { create } from "zustand";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";
import type { User, Track, Artist, Playlist } from "../types/spotify_data";

interface UserState {
    userProfile: User | null;
    topTracks: Track[] | null;
    topArtists: Artist[] | null;
    playlists: Playlist[] | null;

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
            playlists: null,

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
                                'playlists'
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
                    lastFetchedAt: null,
                }),
        }),
        {
            name: 'user-store',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);