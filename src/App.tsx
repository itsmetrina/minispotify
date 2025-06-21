import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { loadUserSpotifyData } from "./api/loadSpotifyData";
import Logout from "./blocks/Logout";
import { UserCard } from "./blocks/UserCard";
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
		<Routes>
			<Route path="/login" element={<Login />} />

			<Route path="/user" element={
				<SecureRoutes>
					<UserCard user={null} />
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