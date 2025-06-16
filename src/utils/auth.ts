import { useAuthStore } from "../store/useAuthStore";

export const isLoggedIn = () => {
	return !!sessionStorage.getItem("access_token");
};

export const logout = () => {
	const { clearAccessToken } = useAuthStore.getState();
	clearAccessToken();
	// sessionStorage.removeItem("access_token");
	// sessionStorage.removeItem("code_verifier");
	window.location.href = "/login";
};