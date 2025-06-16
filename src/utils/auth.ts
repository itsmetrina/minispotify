import { useAuthStore } from "../store/useAuthStore";
import { useUserStore } from "../store/useUserStore";

export const isLoggedIn = () => {
	return !!useAuthStore.getState().accessToken;
};

export const logout = () => {
	useAuthStore.getState().clearAccessToken();
	useUserStore.getState().clearUser();
	window.location.href = "/login";
};