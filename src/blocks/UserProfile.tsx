import { useUserStore } from "../store/useUserStore";

const UserProfile = () => {
    const { userProfile } = useUserStore();

    const getCountryName = (countryCode?: string) => {
        if (!countryCode) return 'Unknown';
        return new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode.toUpperCase()) || 'Unknown';
    };

    // const getRandomAvatarNumber = () => Math.floor(Math.random() * 5) + 1;

    if (!userProfile) return <div>Loading user...</div>;

    return (
        <div className="p-4 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-start">
            {userProfile && <>
                <h2 className="text-xl font-bold mb-4">Hello, {userProfile.display_name || '...'}</h2>
                <img
                    src={userProfile?.images?.[0]?.url}
                    alt={userProfile.display_name + "'s avatar"}
                    className="w-24 h-24 rounded-full mb-4"
                />
                <p className="text-sm mb-2">Email: {userProfile.email}</p>
                <p className="text-sm mb-2">Followers: {userProfile.followers.total}</p>
                <p className="text-sm mb-2">Country: {getCountryName(userProfile.country)}</p>
                <p className="text-sm mb-2">Subscription: {userProfile.product}</p>
            </>}
        </div>
    )
}

export default UserProfile