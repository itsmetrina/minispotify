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
        <div className='columns-2'>
            <div className='col-span-1'>
                <h2 className='text-xl font-bold'>Hello, {userDetails?.display_name || '...'}</h2>
                <button type="button" onClick={logout}>
                    <img src="/logout.svg" alt="Logout" />
                </button>
            </div>
            <div className='col-span-1'>
                <h1 className='text-2xl font-bold'>🎵 Welcome to MiniSpotify!</h1>
                <h2 className='text-xl font-bold'>Top Tracks</h2>
                <TopTracks />
            </div>
        </div>
    )
}

export default Home
