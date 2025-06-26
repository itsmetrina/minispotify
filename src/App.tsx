import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { loadUserSpotifyData } from "./api/loadSpotifyData";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
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
			<Route path="/" element={<Home />} />
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
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	)
}

export default App