import { redirectToSpotifyLogin } from "../auth/login"

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#121212] to-[#1DB954] px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-sm w-full text-center text-white border border-white/20">
                <div className="mb-6">
                    <h1 className="text-4xl font-extrabold tracking-wide mb-2 bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                        MiniSpotify
                    </h1>
                    <p className="text-sm text-gray-300">Log in to explore your music world 🎧</p>
                </div>

                <button
                    onClick={redirectToSpotifyLogin}
                    className="btn btn-success w-full mt-4 font-bold text-black hover:brightness-110 transition duration-200"
                >
                    <img src="/Spotify_Primary_Logo_RGB_White.png" alt="Spotify Logo" className="w-5 h-5 inline-block mr-2" />
                    Log in with Spotify
                </button>

                <div className="mt-6 text-xs text-gray-400">
                    By continuing, you agree to our <span className="underline">Terms</span> and <span className="underline">Privacy Policy</span>.
                </div>
            </div>
        </div>
    )
}

export default Login