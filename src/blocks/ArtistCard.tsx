import type { Artist } from "../types/spotify_data"

export const ArtistCard = ({ artist }: { artist: Artist }) => {
    return (
        <li className="list-row">
            <div>
                <img className="size-10 rounded-box" src={artist.images?.[0]?.url} alt={artist.name} />
            </div>
            <div className="list-col-grow">
                <div className="text-xs uppercase font-semibold opacity-60">{artist.name}</div>
                <div className="text-[1px]] opacity-30">Follower Count: {artist.followers.total}</div>
            </div>
        </li>
    )
}