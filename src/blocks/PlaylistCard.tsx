import type { Playlist } from "../types/spotify_data"

export const PlaylistCard = ({ playlist }: { playlist: Playlist }) => {
    return (
        <div className="p-4 bg-neutral-800 rounded-xl shadow text-white space-y-2">
            <img src={playlist.images?.[0]?.url} alt={playlist.name} className="rounded" />
            <div className="font-bold">{playlist.name}</div>
        </div>
    )
}
