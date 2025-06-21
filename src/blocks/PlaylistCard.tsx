import type { Playlist } from "../types/spotify_data"

export const PlaylistCard = ({ playlist }: { playlist: Playlist }) => {
    return (
        <div tabIndex={0} className="collapse collapse-arrow bg-base-100">
            <div className="collapse-title font-semibold">{playlist.name}</div>
            <div className="collapse-content text-sm">
                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">{playlist.public ? "Public" : "Private"}</div>
                    <div>
                        <img className="size-10 rounded-box" src={playlist.images?.[0]?.url} alt={playlist.name} />
                    </div>
                    <div className="list-col-grow">
                        <div>Owner: {playlist.owner.display_name}</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Description: {playlist.description}</div>
                        <div>Total Tracks: {playlist.tracks.total}</div>
                    </div>
                </li>
            </div>
        </div>
    )
}
