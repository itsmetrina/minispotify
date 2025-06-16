import { create } from "zustand";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface UserProfile {
    display_name: string;
    email: string;
    country: string;
    followers: {
        total: number;
    };
    product: string;
    images: {
        url: string;
    }[];
}

interface UserState {
    user: UserProfile | null;
    setUser: (user: UserProfile) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user: UserProfile) => set({ user }),
            clearUser: () => set({ user: null })
        }),
        {
            name: "user_profile",
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({ user: state.user }) // Only persist the user profile
        }
    )
);