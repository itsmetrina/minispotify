import TopTracks from '../blocks/TopTracks'
import { logout } from '../utils/auth'

const Home = () => {
    return (
        <div className='text-center mt-10'>
            <h1 className='text-2xl font-bold'>🎵 Welcome to MiniSpotify!</h1>
            <p className='mt-4'>You are logged in with Spotify.</p>
            <p className='mt-4'>Your top tracks are:</p>
            <TopTracks />
            <p className='mt-4'>If you want to log out, click the button below.</p>
            <p className='mt-2'>Thank you for using MiniSpotify!</p>
            <button
                className='mt-6 px-4 py-2 bg-red-500 text-white rounded cursor-pointer'
                onClick={logout}
            >
                Logout
            </button>
        </div>
    )
}

export default Home