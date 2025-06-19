import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";

import Logout from "./blocks/Logout";
import TopTracks from "./blocks/TopTracks";
import UserProfile from "./blocks/UserProfile";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

import { isLoggedIn } from "./utils/auth";
import { loadUserSpotifyData } from "./api/fetchSpotifyData";
import SecureRoutes from "./utils/SecureRoutes";


const App = () => {
	useEffect(() => {
		if(isLoggedIn()) {
			loadUserSpotifyData();
		}
	}, []);
	
	return (
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
			<Route path="/tops" element={
				<SecureRoutes>
					<TopTracks />
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