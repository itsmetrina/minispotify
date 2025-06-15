import { useState, useEffect } from 'react'
import { isLoggedIn } from './utils/auth';
import Login from './pages/Login';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		setLoggedIn(isLoggedIn());
	}, []);

	return (
		<>
			<Routes>
				{loggedIn ? (
					<>
						<Route path="/home" element={<Home />} />
					</>
				) : (
					<Route path="/login" element={<Login />} />
				)}
			</Routes>
		</>
	)
}

export default App