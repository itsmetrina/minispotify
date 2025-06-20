import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";

import Logout from "./blocks/Logout";
import UserProfile from "./blocks/UserProfile";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

import { isLoggedIn } from "./utils/auth";
import { loadUserSpotifyData } from "./api/loadSpotifyData";
import SecureRoutes from "./utils/SecureRoutes";
import Dashboard from "./pages/Dashboard";
import { useUserStore } from "./store/useUserStore";


const App = () => {
	const {
		topTracks,
		topArtists,
		recentlyPlayed,
		playlists
	} = useUserStore();

	useEffect(() => {
		if (isLoggedIn()) {
			loadUserSpotifyData();
			console.log(topTracks, topArtists, recentlyPlayed, playlists, 'topTracks, topArtists,recentlyPlayed,playlists')
		}
	}, []);

	return (
		// <>
		// 	<Dashboard />
		// </>
		<Routes>
			<Route path="/login" element={<Login />} />

			<Route path="/user" element={
				<SecureRoutes>
					<UserProfile />
				</SecureRoutes>
			} />
			<Route path="/welcome" element={
				<SecureRoutes>
					<Welcome />
				</SecureRoutes>
			} />
			<Route path="/dasboard" element={
				<SecureRoutes>
					<Dashboard />
				</SecureRoutes>
			} />
			<Route path="/logout" element={
				<SecureRoutes>
					<Logout />
				</SecureRoutes>
			} />
			<Route path="/" element={
				isLoggedIn()
					? <Navigate to="/welcome" />
					: <Navigate to="/login" />
			} />

			<Route path="*" element={
				isLoggedIn()
					? <Navigate to="/welcome" />
					: <Navigate to="/login" />
			} />
		</Routes>
	)
}

export default App