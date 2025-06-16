import { useUserStore } from "../store/useUserStore"

const Welcome = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-2xl font-bold mb-4">🎵 Welcome to MiniSpotify!</h1>
            <h3 className="text-lg">{useUserStore.getState().user?.display_name}</h3>
        </div>
    )
}

export default Welcome