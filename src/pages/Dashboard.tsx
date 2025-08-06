import { ArtistCard } from "../blocks/ArtistCard";
import { PlaylistCard } from "../blocks/PlaylistCard";
import { TrackCard } from "../blocks/TrackCard"
import { UserCard } from "../blocks/UserCard";
import { useUserStore } from "../store/useUserStore"
import EmptyState from "../blocks/EmptyState";
import { useState } from "react";

const Dashboard = () => {
    const {
        userProfile,
        devices,
        topTracks,
        topArtists,
        playlists,
        lastFetchedAt
    } = useUserStore();

    const [currentTrackUri, setCurrentTrackUri] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    return (
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="col-span-full">
                <UserCard user={userProfile} lastFetched={lastFetchedAt} devices={devices} />
            </div>

            <div className="bg-base-100 rounded-xl shadow-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold uppercase opacity-60">Top Tracks</h3>
                <ul className="space-y-2">
                    {(topTracks ?? []).length > 0 ? (topTracks?.map((track) => (
                        <TrackCard 
                            key={track.id} 
                            user={userProfile} 
                            track={track} 
                            devices={devices} 
                            currentTrackUri={currentTrackUri}
                            isPlaying={isPlaying}
                            setCurrentTrackUri={setCurrentTrackUri}
                            setIsPlaying={setIsPlaying} />
                    ))) : (
                        <EmptyState message="No top tracks found." />
                    )}
                </ul>
            </div>

            <div className="bg-base-100 rounded-xl shadow-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold uppercase opacity-60">Top Artists</h3>
                <ul className="space-y-2">
                    {(topArtists ?? []).length > 0 ? (topArtists?.map((artist) => (
                        <ArtistCard key={artist.id} artist={artist} />
                    ))) : (
                        <EmptyState message="No top artists found." />
                    )}
                </ul>
            </div>

            <div className="bg-base-100 rounded-xl shadow-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold uppercase opacity-60">Top Playlists</h3>
                <ul className="space-y-2">
                    {(playlists ?? []).length > 0 ? (playlists?.map((pl) => (
                        <PlaylistCard key={pl.id} playlist={pl} />
                    ))) : (
                        <EmptyState message="No playlists found." />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Dashboard