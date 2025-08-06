import { playTrack } from "../api/spotifyAPI"
import type { Device, Track, User } from "../types/spotify_data"

export const TrackCard = ({ user, track, devices }: { user: User | null; track: Track; devices: Device[] | null }) => {
	const activeDevice = devices?.find((d) => d.is_active && !d.is_restricted);
	const handlePlay = () => {
		if (!user?.product?.includes('premium')) return;
		if (!activeDevice) {
			alert("No active Spotify device found. Please open Spotify on your phone or computer.");
			return;
		}
		playTrack(track.uri, activeDevice.id);
	};
	return (
		<li className="flex items-center gap-4 p-3 hover:bg-[#1db9540d] rounded transition-all">
			<div className="text-lg font-bold text-[#1DB954] w-6">{track.track_number}</div>
			<img src={track.album.images[0]?.url} alt={track.name} className="size-10 rounded-md shadow-sm" />
			<div className="flex-1 min-w-0">
				<p className="truncate font-semibold text-white">{track.name}</p>
				<p className="text-xs uppercase opacity-60 text-[#1DB954]">{track.artists.map((a) => a.name).join(", ")}</p>
			</div>
			<>{console.log(devices, track, 'devices, track')}</>
			{user?.product?.includes("premium") && (
				<button
					className="btn btn-square btn-ghost hover:text-[#1DB954]"
					onClick={handlePlay}
					aria-label="Play track"
				>
					<svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M6 3L20 12 6 21V3z" />
					</svg>
				</button>
			)}
		</li>
	)
}