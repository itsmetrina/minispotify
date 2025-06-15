import { useState, useEffect } from 'react';
import { fetchProfile } from '../api/spotify';
import TopTracks from '../blocks/TopTracks'
import { logout } from '../utils/auth'

const Home = () => {
    const [userDetails, setUserDetails] = useState<any>(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const data = await fetchProfile();
            setUserDetails(data);
        };
        fetchUserDetails();
    }, []);

    return (
        <div className='min-h-screen'>
            <div className='flex flex-col items-center justify-center min-h-screen bg-black text-white'>
                <h2 className='text-xl font-bold mb-4'>Hello, {userDetails?.display_name || '...'}</h2>
                <button type="button" onClick={logout} className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4'>
                    Logout
                </button>
                <h1 className='text-2xl font-bold mb-4'>🎵 Welcome to MiniSpotify!</h1>
                <h2 className='text-xl font-bold mb-4'>Top Tracks</h2>
                <TopTracks />
            </div>
        </div>
    )
}

export default Home
