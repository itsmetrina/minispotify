import { useEffect, useState } from "react";
import { pausePlayback, playTrack, transferPlayback } from "../api/spotifyAPI"
import type { Track, User } from "../types/spotify_data"
import { spotifyFetch } from "../api/spotifyFetch";

export const TrackCard = ({ user, track, currentTrackUri, setCurrentTrackUri }: { user: User | null; track: Track; currentTrackUri: string | null; setCurrentTrackUri: (uri: string | null) => void; }) => {
	const [deviceId, setDeviceId] = useState<string | null>(null);
	const isPlaying = currentTrackUri === track.uri;

	useEffect(() => {
		const fetchDeviceId = async () => {
			try {
				const res = await spotifyFetch("me/player/devices", "GET");
				console.log(res, 'res');
				const activeDevice = res.devices?.find((d: any) => d.is_active && d.type !== "Unknown");

				if (activeDevice) {
					setDeviceId(activeDevice.id);
				} else {
					console.warn("No active Spotify device found.");
				}
			} catch (err) {
				console.error("Error fetching devices:", err);
			}
		};

		fetchDeviceId();
	}, []);

	const togglePlayPause = async () => {
		if (!deviceId) {
			alert("Please open Spotify on a device first.");
			return;
		}

		if (isPlaying) {
			await pausePlayback();
			setCurrentTrackUri(null);
		} else {
			await transferPlayback(deviceId); // ensure playback is transferred
			await playTrack(track.uri);
			setCurrentTrackUri(track.uri);
		}
	};
	
	return (
		<li className="flex items-center gap-4 p-3 hover:bg-[#1db9540d] rounded transition-all">
			<div className="text-lg font-bold text-[#1DB954] w-6">{track.track_number}</div>
			<img src={track.album.images[0]?.url} alt={track.name} className="size-10 rounded-md shadow-sm" />
			<div className="flex-1 min-w-0">
				<p className="truncate font-semibold text-white">{track.name}</p>
				<p className="text-xs uppercase opacity-60 text-[#1DB954]">{track.artists.map((a) => a.name).join(", ")}</p>
			</div>
			{user?.product?.includes('premium') && (
				<button
					className="btn btn-square btn-ghost hover:text-[#1DB954]"
					onClick={togglePlayPause}
					aria-label={isPlaying ? "Pause track" : "Play track"}
				>
					{isPlaying ? (
						<svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
							<path d="M6 4h4v16H6zm8 0h4v16h-4z" />
						</svg>
					) : (
						<svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
							<path d="M6 3L20 12 6 21V3z" />
						</svg>
					)}
				</button>
			)}
		</li>
	)
}