import { useEffect, useState } from "react";
import { pausePlayback, playTrack } from "../api/spotifyAPI"
import type { Track, User } from "../types/spotify_data"
import { spotifyFetch } from "../api/spotifyFetch";

export const TrackCard = ({ user, track }: { user: User | null; track: Track }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTrackUri, setCurrentTrackUri] = useState<string | null>(null);

	useEffect(() => {
		const fetchPlaybackState = async () => {
			try {
				const res = await spotifyFetch("me/player", "GET");
				if (res?.is_playing && res?.item?.uri === track.uri) {
					setIsPlaying(true);
					setCurrentTrackUri(res.item.uri);
				} else {
					setIsPlaying(false);
				}
			} catch (err) {
				console.error("Error fetching playback state", err);
			}
		};

		fetchPlaybackState();
	}, [track.uri]);

	const togglePlayPause = async () => {
		if (isPlaying && currentTrackUri === track.uri) {
			await pausePlayback();
			setIsPlaying(false);
		} else {
			await playTrack(track.uri);
			setIsPlaying(true);
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
				<button className="btn btn-square btn-ghost hover:text-[#1DB954]" onClick={togglePlayPause} aria-label={isPlaying ? "Pause track" : "Play track"}>
					{isPlaying ? (
						// Pause Icon
						<svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
							<path d="M6 4h4v16H6zm8 0h4v16h-4z" />
						</svg>
					) : (
						// Play Icon
						<svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
							<path d="M6 3L20 12 6 21V3z" />
						</svg>
					)}
					{/* <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M6 3L20 12 6 21V3z" />
					</svg> */}
				</button>
			)}
		</li>
	)
}