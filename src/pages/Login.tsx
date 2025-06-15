import { redirectToSpotifyLogin } from "../auth/login"

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
			<img src="2024-spotify-full-logo/Full_Logo_Green_RGB.svg" alt="Spotify Full Logo" className="mb-4 w-48" />
			<button type="button" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={redirectToSpotifyLogin}>Login</button>
		</div>
    )
}

export default Login