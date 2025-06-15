import Login from './pages/Login';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import UserProfile from './blocks/UserProfile';
import SecureRoutes from './utils/secureRoutes';

const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/" element={
				<SecureRoutes>
					<UserProfile />
				</SecureRoutes>
			} />
			<Route path="/home" element={
				<SecureRoutes>
					<Home />
				</SecureRoutes>
			} />
		</Routes>
	)
}

export default App