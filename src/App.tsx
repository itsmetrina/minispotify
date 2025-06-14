import { useState, useEffect } from 'react'
import { isLoggedIn } from './utils/auth';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		setLoggedIn(isLoggedIn());
	}, []);

	return (
		<div>
			{loggedIn ? <Home /> : <Login />}
		</div>
	)
}

export default App