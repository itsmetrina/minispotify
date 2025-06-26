import type { Artist } from "../types/spotify_data"

export const ArtistCard = ({ artist }: { artist: Artist }) => {
    return (
        <li className="flex items-center gap-4 p-3 hover:bg-[#1db9540d] rounded transition-all">
            <img
                src={artist.images?.[0]?.url}
                alt={artist.name}
                className="size-10 rounded-full ring-2 ring-[#1DB954]"
            />
            <div className="flex-1">
                <p className="font-semibold text-white">{artist.name}</p>
                <p className="text-xs text-gray-400">Followers: {artist.followers.total.toLocaleString()}</p>
            </div>
        </li>
    )
}