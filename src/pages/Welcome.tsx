import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore"

const Welcome = () => {
    const navigate = useNavigate();
    const user = useUserStore.getState().userProfile;

    const handleClick = () => {
        navigate("/dashboard");
         console.log("Swap clicked");
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#121212] via-[#1DB9540a] to-base-100 text-white px-4">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent animate-fade-in">
                    🎵 Welcome to MiniSpotify!
                </h1>
                <h2 className="text-lg text-gray-400 animate-fade-in delay-200">
                    Hello, <span className="text-[#1DB954] font-semibold">{user?.display_name || "Guest"}</span>
                </h2>

                <label className="swap swap-rotate text-3xl cursor-pointer mt-6 animate-fade-in delay-300" onClick={handleClick} title="Toggle">
                    <input type="checkbox" />
                    <div className="swap-on">🔼</div>
                    <div className="swap-off">🔽</div>
                </label>

                <p className="text-xs text-gray-500 mt-6">Your music experience starts here.</p>
            </div>
        </div>
    )
}

export default Welcome