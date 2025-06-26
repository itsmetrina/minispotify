import type { User } from '../types/spotify_data';
import { logout } from '../utils/auth';
import avatar1 from "./../assets/avatars/avatar-1.svg";

export const UserCard = ({ user, lastFetched }: { user: User | null; lastFetched: any }) => {
    const getCountryName = (countryCode?: string) => {
        if (!countryCode) return 'Unknown';
        return new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode.toUpperCase()) || 'Unknown';
    };

    // const getRandomAvatarNumber = () => Math.floor(Math.random() * 5) + 1;

    if (!user) return <div>Loading user...</div>;

    const displatFigure = () => {
        if (user?.images?.length > 0) {
            return user?.images?.[0]?.url;
        } else return avatar1;
    }
    return (
        // <div className="card card-side bg-base-100 shadow-sm">
        //     <figure>
        //         <img
        //             src={displatFigure()}
        //             alt={user.display_name + "'s avatar"}
        //             width={300} height={300} />
        //     </figure>
        //     <div className="stat block">
        //         <div className="stat-title">Followers: {user.followers.total}</div>
        //         <div className="stat-value">{user.display_name}</div>
        //         <div className="stat-desc">Email: {user.email}</div>
        //         <div className="stat-desc">Subscription: {user.product}</div>
        //         <div className="stat-desc">Country: {getCountryName(user.country)}</div>
        //         <h2>Data Last Fetched At: {lastFetched.toLocaleString()}</h2>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-warning" onClick={logout}>Log out</button>
        //         </div>
        //     </div>
        // </div>
        <div className="card card-side bg-base-100 shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
            <figure className="flex-shrink-0">
                <img
                    src={displatFigure()}
                    alt={`${user.display_name}'s avatar`}
                    className="w-full h-auto md:w-48 object-cover"
                />
            </figure>
            <div className="p-4 flex flex-col justify-between space-y-2">
                <div>
                    <h2 className="text-xl font-bold">{user.display_name}</h2>
                    <p className="text-sm text-gray-500">Followers: {user.followers.total}</p>
                    <p className="text-sm text-gray-500">Email: {user.email}</p>
                    <p className="text-sm text-gray-500">Subscription: {user.product}</p>
                    <p className="text-sm text-gray-500">Country: {getCountryName(user.country)}</p>
                </div>
                <div className="text-xs opacity-60">Data Last Fetched: {lastFetched.toLocaleString()}</div>
                <div className="pt-2">
                    <button className="btn btn-warning w-full md:w-auto" onClick={logout}>Log out</button>
                </div>
            </div>
        </div>
    )
}
