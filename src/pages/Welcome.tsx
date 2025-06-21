import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore"

const Welcome = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard");
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-white">
                <h1 className="text-2xl font-bold mb-4">🎵 Welcome to MiniSpotify!</h1>
                <h3 className="text-lg">{useUserStore.getState().userProfile?.display_name}</h3>
                <label className="swap swap-rotate text-xl" onClick={handleClick}>
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />

                    <div className="swap-on">🔼</div>
                    <div className="swap-off">🔽</div>
                </label>
            </div>
        </>
    )
}

export default Welcome