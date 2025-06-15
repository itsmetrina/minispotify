import { useState, useEffect } from 'react';
import { fetchProfile } from '../api/spotify';
import { avatarMap } from '../utils/avatarMap';

const UserProfile = () => {
    const getRandomAvatarNumber = () => Math.floor(Math.random() * 5) + 1;
    const [userProfile, setUserProfile] = useState<any>(null);
    const [avatar, setAvatar] = useState<string>(avatarMap[getRandomAvatarNumber()]);
    const [userErr, setUserErr] = useState<any>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await fetchProfile();
                setUserProfile(data);
                setAvatar(data?.images?.[0]?.url || avatarMap[getRandomAvatarNumber()]);
            } catch (error) {
                setUserErr(error);
            }
        };
        fetchUserProfile();
    }, []);

    const getCountryName = (countryCode: string) => {
        return new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode.toUpperCase());
    };

    return (
        <div className='p-4 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-start'>
            {userErr && <div>Error fetching user profile</div>}
            {userProfile && <div>
                <h2 className='text-xl font-bold mb-4'>Hello, {userProfile?.display_name || '...'}</h2>
                <img src={avatar} alt='User Avatar' className='w-24 h-24 rounded-full mb-4' />
                <p className='text-sm mb-2'>Email: {userProfile?.email || 'N/A'}</p>
                <p className='text-sm mb-2'>Followers: {userProfile?.followers?.total || 0}</p>
                <p className='text-sm mb-2'>Country: {getCountryName(userProfile?.country) || 'N/A'}</p>
                <p className='text-sm mb-2'>Subscription: {userProfile?.product || 'N/A'}</p>
            </div>}
        </div>
    )
}

export default UserProfile