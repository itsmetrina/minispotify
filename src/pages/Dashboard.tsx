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
        playlists
    } = useUserStore();

    return (
        <div className="p-6 space-y-10">
            <UserCard user={userProfile} />

            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Top 5 Track</li>
                {topTracks?.map((track) => (
                    <TrackCard key={track.id} user={userProfile} track={track} />
                ))}
            </ul>

            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Top 5 Artists</li>
                {topArtists?.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                ))}
            </ul>

            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Top 5 Artists</li>
                {playlists?.map((pl) => (
                    <PlaylistCard key={pl.id} playlist={pl} />
                ))}
            </ul>
        </div>
    )
}

export default Dashboard