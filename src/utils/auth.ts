import { useAuthStore } from "../store/useAuthStore";

export const isLoggedIn = () => {
	return !!useAuthStore.getState().accessToken;
};

export const logout = () => {
	const { clearAccessToken } = useAuthStore.getState();
	clearAccessToken();
	window.location.href = "/login";
};