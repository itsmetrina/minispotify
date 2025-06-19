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
import Dashboard from "./pages/Dashboard";


const App = () => {
	useEffect(() => {
		if(isLoggedIn()) {
			loadUserSpotifyData();
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