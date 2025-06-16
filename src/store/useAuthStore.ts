import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
    _hasHydrated: boolean;
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