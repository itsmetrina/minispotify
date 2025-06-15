import TopTracks from '../blocks/TopTracks'
import UserProfile from '../blocks/UserProfile'
import { logout } from '../utils/auth'

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-black text-white'>
            <UserProfile />
            <button type='button' onClick={logout} className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4'>
                Logout
            </button>
            <h1 className='text-2xl font-bold mb-4'>🎵 Welcome to MiniSpotify!</h1>
            <h2 className='text-xl font-bold mb-4'>Top Tracks</h2>
            <TopTracks />
        </div>
    )
}

export default Home
