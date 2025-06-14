// import TopTracks from "./blocks/TopTracks"

import { login } from "./auth/login"

const App = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
			<h1 className="text-3xl font-bold">MiniSpotify — Coming Soon 🎧</h1>
			<button type="button" onClick={login}>Login with Spotify</button>
		</div>
	)
}

export default App