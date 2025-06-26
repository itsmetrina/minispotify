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
                    {/* <svg
                        className="w-5 h-5 inline-block mr-2"
                        viewBox="0 0 168 168"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#1ED760"
                            d="M84 0a84 84 0 100 168 84 84 0 000-168zm38.7 120.5c-1.4 2.3-4.4 3-6.7 1.7-18.3-11.2-41.4-13.7-68.6-7.4-2.6.6-5.2-1-5.8-3.6-.7-2.6 1-5.2 3.6-5.8 30.1-7 56.8-4.1 77.2 8.5 2.4 1.4 3.2 4.4 1.7 6.6zm9.7-20.4c-1.7 2.8-5.3 3.7-8.1 2-21-13-53-16.7-77.8-9-3 .9-6.1-.8-7-3.7-.9-3 .8-6.1 3.7-7 28.7-8.7 64.4-4.5 89.4 10.2 2.8 1.7 3.7 5.3 2 8zm.8-22.3C115 61.3 78 59 49.3 68c-3.4 1.1-7-.8-8.1-4.2-1.1-3.4.8-7 4.2-8.1 33.3-10.5 75.3-7.8 104.6 11 3 1.9 3.9 5.8 2 8.8-1.8 2.9-5.7 3.8-8.6 2z"
                        />
                    </svg> */}
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