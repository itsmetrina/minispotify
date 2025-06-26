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
        // <div className="grid grid-cols-1 lg:grid-cols-2 p-6 space-y-10">
        //     <UserCard user={userProfile} lastFetched={lastFetchedAt} />

        //     <ul className="list bg-base-100 rounded-box shadow-md">
        //         <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Top 5 Track</li>
        //         {topTracks?.map((track) => (
        //             <TrackCard key={track.id} user={userProfile} track={track} />
        //         ))}
        //     </ul>

        //     <ul className="list bg-base-100 rounded-box shadow-md">
        //         <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Top 5 Artists</li>
        //         {topArtists?.map((artist) => (
        //             <ArtistCard key={artist.id} artist={artist} />
        //         ))}
        //     </ul>

        //     <ul className="list bg-base-100 rounded-box shadow-md">
        //         <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Top 5 Artists</li>
        //         {playlists?.map((pl) => (
        //             <PlaylistCard key={pl.id} playlist={pl} />
        //         ))}
        //     </ul>
        // </div>
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="col-span-full">
                <UserCard user={userProfile} lastFetched={lastFetchedAt} />
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