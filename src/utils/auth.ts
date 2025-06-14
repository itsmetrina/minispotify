export const isLoggedIn = () => {
	return !!sessionStorage.getItem('access_token');
};

export const logout = () => {
	sessionStorage.removeItem('access_token');
	sessionStorage.removeItem('code_verifier');
	window.location.href = '/';
};