import type { Artist } from "../types/spotify_data"

export const ArtistCard = ({ artist }: { artist: Artist }) => {
    return (
        <div className="p-4 bg-neutral-800 rounded-xl shadow text-white text-center space-y-2">
            <img src={artist.images?.[0]?.url} alt={artist.name} className="w-full h-40 object-cover rounded" />
            <div className="font-bold">{artist.name}</div>
        </div>
    )
}