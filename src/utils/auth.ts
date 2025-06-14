export const isLoggedIn = () => {
  return !!sessionStorage.getItem('access_token');
};

export const logout = () => {
  sessionStorage.removeItem('access_token');
  window.location.href = '/'; // or redirect to login
};