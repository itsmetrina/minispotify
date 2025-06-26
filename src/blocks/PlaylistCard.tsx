import type { Playlist } from "../types/spotify_data"

export const PlaylistCard = ({ playlist }: { playlist: Playlist }) => {
    return (
        <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-l-4 border-[#1DB954] rounded-md shadow-sm hover:shadow-md">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">{playlist.name}</div>
            <div className="collapse-content text-sm text-white space-y-2">
                <li className="flex items-center gap-4">
                    <div className="text-xs text-[#1DB954]">{playlist.public ? "Public" : "Private"}</div>
                    <img src={playlist.images?.[0]?.url} alt={playlist.name} className="size-10 rounded-md" />
                    <div>
                        <p className="font-medium">Owner: {playlist.owner.display_name}</p>
                        <p className="text-xs opacity-70">Description: {playlist.description || "No description"}</p>
                        <p className="text-xs opacity-70">Tracks: {playlist.tracks.total}</p>
                    </div>
                </li>
            </div>
        </div>
    )
}
