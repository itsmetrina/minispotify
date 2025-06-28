import { useEffect } from "react";
import { ArtistCard } from "../blocks/ArtistCard"
import { PlaylistCard } from "../blocks/PlaylistCard";
import { TrackCard } from "../blocks/TrackCard"
import { UserCard } from "../blocks/UserCard";
import { useUserStore } from "../store/useUserStore"

const Dashboard = () => {
    const {
        userProfile,
        topTracks,
        topArtists,
        playlists,
        lastFetchedAt
    } = useUserStore();
    useEffect(() => {
        console.log(userProfile,
            topTracks,
            topArtists,
            playlists);
    })

    return (
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="col-span-full">
                <UserCard user={userProfile} />
            </div>

            <div className="bg-base-100 rounded-xl shadow-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold uppercase opacity-60">Top Tracks</h3>
                <ul className="space-y-2">
                    {topTracks?.map((track) => (
                        <TrackCard key={track.id} user={userProfile} track={track} />
                    ))}
                </ul>
            </div>

            <div className="bg-base-100 rounded-xl shadow-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold uppercase opacity-60">Top Artists</h3>
                <ul className="space-y-2">
                    {topArtists?.map((artist) => (
                        <ArtistCard key={artist.id} artist={artist} />
                    ))}
                </ul>
            </div>

            <div className="bg-base-100 rounded-xl shadow-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold uppercase opacity-60">Top Playlists</h3>
                <ul className="space-y-2">
                    {playlists?.map((pl) => (
                        <PlaylistCard key={pl.id} playlist={pl} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Dashboard