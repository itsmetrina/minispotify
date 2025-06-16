import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
    accessToken: string | null;
    setAccessToken: (token:string) => void;
    clearAccessToken: () => void;
}
export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            accessToken: null,
            setAccessToken: (token: string) => set({ accessToken: token }),
            clearAccessToken: () => set({ accessToken: null }),
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);
