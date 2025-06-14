import { logout } from '../utils/auth'

const Home = () => {
    return (
        <div className='text-center mt-10'>
            <h1 className='text-2xl font-bold'>🎵 Welcome to MiniSpotify!</h1>
            <p className='mt-4'>You are logged in with Spotify.</p>
            <button
                className='mt-6 px-4 py-2 bg-red-500 text-white rounded'
                onClick={logout}
            >
                Logout
            </button>
        </div>
    )
}

export default Home