import type { User } from '../types/spotify_data';
import { logout } from '../utils/auth';

export const UserCard = ({ user, lastFetched }: { user: User | null; lastFetched: any }) => {
    if (!user) {
        return (
            <div className="bg-base-100 p-6 rounded-2xl shadow animate-pulse flex items-center gap-6">
                <div className="w-32 h-32 bg-gray-700 rounded-full" />
                <div className="space-y-4 flex-1">
                    <div className="h-6 bg-gray-700 rounded w-1/2" />
                    <div className="h-4 bg-gray-700 rounded w-3/4" />
                    <div className="h-4 bg-gray-700 rounded w-1/4" />
                    <div className="h-4 bg-gray-700 rounded w-1/2" />
                </div>
            </div>
        );
    }


    const displayFigure = () =>
        user.images?.[0]?.url || "/music_lover.jpg";

    const getCountryName = (code: string) =>
        new Intl.DisplayNames(["en"], { type: "region" }).of(code) || code;

    const formatDate = (timestamp: number) => {
        const now = Date.now();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);

        const relative =
            minutes < 1
                ? "Just now"
                : minutes < 60
                    ? `${minutes} min${minutes > 1 ? "s" : ""} ago`
                    : `${hours} hour${hours > 1 ? "s" : ""} ago`;

        const full = new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        }).format(timestamp);

        return { relative, full };
    };

    const { relative, full } = formatDate(lastFetched);
    return (
        <div className="bg-gradient-to-br from-[#1db9541a] to-base-100 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-6 border border-[#1DB954]/30">
            <div className="relative">
                <img
                    src={displayFigure()}
                    alt={`${user.display_name}'s avatar`}
                    className="rounded-full w-32 h-32 object-cover shadow-lg border-4 border-[#1DB954]/60"
                />
                <div className={`absolute bottom-0 right-0 badge px-3 py-1 text-white ${user.product === "premium" ? "bg-[#1DB954]" : "bg-gray-400"}`}>
                    {user.product}
                </div>
            </div>

            <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#1DB954]">{user.display_name}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm mt-3">
                    <p className="text-gray-400">👥 Followers:</p>
                    <p className="col-span-2 text-white">{user.followers.total.toLocaleString()}</p>

                    <p className="text-gray-400">📧 Email:</p>
                    <p className="col-span-2 text-white">{user.email}</p>

                    <p className="text-gray-400">🌍 Country:</p>
                    <p className="col-span-2 text-white">{getCountryName(user.country)}</p>
                </div>

                <div className="mt-4 flex justify-between text-xs text-gray-400">
                    <span>⏱ {relative}</span>
                    <span className="hidden sm:inline">— {full}</span>
                </div>

                <div className="mt-4 text-right">
                    <button className="btn btn-success btn-sm shadow-md hover:brightness-110" onClick={logout}>Log out</button>
                </div>
            </div>
        </div>
    )
}