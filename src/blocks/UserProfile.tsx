import { useState, useEffect } from 'react';
import { fetchProfile } from '../api/spotify';

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState<any>(null);
    const [userErr, setUserErr] = useState<any>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await fetchProfile();
                setUserProfile(data);
            } catch (error) {
                setUserErr(error);
            }
        };
        fetchUserProfile();
    }, []);
    return (
        <div>
            {userErr && <div>Error fetching user profile</div>}
            {userProfile && <div>
                <h2 className='text-xl font-bold mb-4'>Hello, {userProfile?.display_name || '...'}</h2>
                <img src={userProfile?.images?.[0]?.url} alt='User Avatar' className='w-24 h-24 rounded-full mb-4' />
                <p className='text-lg mb-2'>Email: {userProfile?.email || 'N/A'}</p>
                <p className='text-lg mb-2'>Followers: {userProfile?.followers?.total || 0}</p>
                <p className='text-lg mb-2'>Country: {userProfile?.country || 'N/A'}</p>
            </div>}
        </div>
    )
}

export default UserProfile