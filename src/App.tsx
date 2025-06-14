import { useEffect } from "react"
import { redirectToSpotifyLogin } from "./auth/login"

const App = () => {
	useEffect(() => {
		if (window.location.pathname === "/callback") {
			import("./auth/callback").then(({ handleRedirectCallback }) => {
				handleRedirectCallback();
			});
		}
	}, []);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
			<h1 className="text-3xl font-bold">MiniSpotify — Coming Soon 🎧</h1>
			<button type="button" onClick={redirectToSpotifyLogin}>Login with Spotify</button>
		</div>
	)
}

export default App