import type { Playlist } from "../types/spotify_data"

export const PlaylistCard = ({ playlist }: { playlist: Playlist }) => {
    return (
        // <div tabIndex={0} className="collapse collapse-arrow bg-base-100">
        //     <div className="collapse-title font-semibold">{playlist.name}</div>
        //     <div className="collapse-content text-sm">
        //         <li className="list-row">
        //             <div className="text-4xl font-thin opacity-30 tabular-nums">{playlist.public ? "Public" : "Private"}</div>
        //             <div>
        //                 <img className="size-10 rounded-box" src={playlist.images?.[0]?.url} alt={playlist.name} />
        //             </div>
        //             <div className="list-col-grow">
        //                 <div>Owner: {playlist.owner.display_name}</div>
        //                 <div className="text-xs uppercase font-semibold opacity-60">Description: {playlist.description}</div>
        //                 <div>Total Tracks: {playlist.tracks.total}</div>
        //             </div>
        //         </li>
        //     </div>
        // </div>
        <div tabIndex={0} className="collapse collapse-arrow bg-base-100 rounded-lg shadow-md transition hover:shadow-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-base truncate">{playlist.name}</div>
            <div className="collapse-content p-2">
                <li className="flex items-center gap-3 p-2">
                    <div className="text-xs opacity-40">{playlist.public ? "Public" : "Private"}</div>
                    <img src={playlist.images?.[0]?.url} alt={playlist.name} className="size-10 rounded-md" />
                    <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-medium">Owner: {playlist.owner.display_name}</p>
                        <p className="text-xs text-gray-500">Description: {playlist.description || "No description"}</p>
                        <p className="text-xs text-gray-500">Tracks: {playlist.tracks.total}</p>
                    </div>
                </li>
            </div>
        </div>
    )
}
