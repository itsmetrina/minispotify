import type { User } from '../types/spotify_data';
import { logout } from '../utils/auth';
import { avatarMap } from '../utils/avatarMap';

export const UserCard = ({ user }: { user: User | null }) => {
    const getCountryName = (countryCode?: string) => {
        if (!countryCode) return 'Unknown';
        return new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode.toUpperCase()) || 'Unknown';
    };

    const getRandomAvatarNumber = () => Math.floor(Math.random() * 5) + 1;

    if (!user) return <div>Loading user...</div>;

    const displatFigure = () => {
        if (user?.images?.length > 0) {
            return user?.images?.[0]?.url;
        } else return avatarMap[getRandomAvatarNumber()];
    }
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={displatFigure()}
                    alt={user.display_name + "'s avatar"}
                    width={300} height={300} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user.display_name}</h2>
                <p>Email: {user.email}</p>
                <p>Followers: {user.followers.total}</p>
                <p>Country: {getCountryName(user.country)}</p>
                <p>Subscription: {user.product}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning" onClick={logout}>Log out</button>
                </div>
            </div>
        </div>
    )
}
