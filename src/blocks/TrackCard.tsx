import type { Track } from "../types/spotify_data"

export const TrackCard = ({ track }: { track: Track }) => {
	return (
		<div className="p-4 bg-neutral-800 rounded-xl shadow text-white space-y-2">
			<img className="rounded" src={track.album.images[0]?.url} alt={track.name} />
			<div className="font-bold">{track.name}</div>
			<div className="text-sm text-gray-300">{track.artists.map((a) => a.name).join(", ")}</div>
		</div>
	)
}