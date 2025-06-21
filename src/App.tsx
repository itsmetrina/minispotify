import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { loadUserSpotifyData } from "./api/loadSpotifyData";
import Logout from "./blocks/Logout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import { isLoggedIn } from "./utils/auth";
import SecureRoutes from "./utils/SecureRoutes";

const App = () => {

	useEffect(() => {
		if (isLoggedIn()) {
			loadUserSpotifyData();
		}
	}, []);

	return (
		// <Dashboard />
		<Routes>
			<Route path="/login" element={<Login />} />

			<Route path="/welcome" element={
				<SecureRoutes>
					<Welcome />
				</SecureRoutes>
			} />
			<Route path="/dashboard" element={
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