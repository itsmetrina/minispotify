import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
    _hasHydrated: boolean;
    codeVerifier: string | null;
    setCodeVerifier: (verifier: string) => void;
    clearCodeVerifier: () => void;
    accessToken: string | null;
    setAccessToken: (token:string) => void;
    clearAccessToken: () => void;
}
export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            codeVerifier: null,
            setCodeVerifier: (verifier: string) => set({ codeVerifier: verifier }),
            clearCodeVerifier: () => set({ codeVerifier: null }),
            accessToken: null,
            setAccessToken: (token: string) => set({ accessToken: token }),
            clearAccessToken: () => set({ accessToken: null }),
            _hasHydrated: false
        }),
        {
            name: "access_token",
            storage: createJSONStorage(() => sessionStorage),
            onRehydrateStorage: () => (state) => {
                if(state) {
                    state._hasHydrated = true;
                }
            }
        }
    )
);

export const useHasHydrated = () => {
    const { _hasHydrated } = useAuthStore.getState();
    return _hasHydrated;
};