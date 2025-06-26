import type { Artist } from "../types/spotify_data"

export const ArtistCard = ({ artist }: { artist: Artist }) => {
    return (
        // <li className="list-row">
        //     <div>
        //         <img className="size-10 rounded-box" src={artist.images?.[0]?.url} alt={artist.name} />
        //     </div>
        //     <div className="list-col-grow">
        //         <div className="text-xs uppercase font-semibold opacity-60">{artist.name}</div>
        //         <div className="text-[1px]] opacity-30">Follower Count: {artist.followers.total}</div>
        //     </div>
        // </li>
        <li className="flex items-center gap-3 p-2 hover:bg-base-200 rounded transition">
            <img src={artist.images?.[0]?.url} alt={artist.name} className="size-10 rounded-md" />
            <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-medium">{artist.name}</p>
                <p className="text-xs opacity-50 truncate">Followers: {artist.followers.total.toLocaleString()}</p>
            </div>
        </li>
    )
}