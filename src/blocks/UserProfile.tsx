import { useState, useEffect } from "react";
import { fetchProfile } from "../api/spotify";
// import { avatarMap } from "../utils/avatarMap";
import { useUserStore } from "../store/useUserStore";

const UserProfile = () => {
    const { user, setUser } = useUserStore();
    const [userErr, setUserErr] = useState<any>(null);
    const getCountryName = (countryCode: string) =>
        new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode.toUpperCase());

    // const getRandomAvatarNumber = () => Math.floor(Math.random() * 5) + 1;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await fetchProfile();
                setUser(data);
            } catch (error) {
                setUserErr(error);
            }
        };
        if (!user) fetchUser();
    }, [user, setUser]);

    if (!user) return <div>Loading user...</div>;

    return (
        <div className="p-4 rounded-lg shadow-md max-w-md mx-auto flex flex-col items-start">
            {userErr && <>Error fetching user profile</>}
            {user && <>
                <h2 className="text-xl font-bold mb-4">Hello, {user.display_name || '...'}</h2>
                <img
                    src={user?.images?.[0]?.url || '/avatars/avatar-1.svg'}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full mb-4"
                />
                <p className="text-sm mb-2">Email: {user.email}</p>
                <p className="text-sm mb-2">Followers: {user.followers.total}</p>
                <p className="text-sm mb-2">Country: {getCountryName(user.country)}</p>
                <p className="text-sm mb-2">Subscription: {user.product}</p>
            </>}
        </div>
    )
}

export default UserProfile