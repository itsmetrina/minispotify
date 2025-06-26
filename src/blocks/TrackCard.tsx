import { playTrack } from "../api/spotifyAPI"
import type { Track, User } from "../types/spotify_data"

export const TrackCard = ({ user, track }: { user: User | null; track: Track }) => {
	return (
		// <li className="list-row">
		// 	<div className="text-4xl font-thin opacity-30 tabular-nums">{track.track_number}</div>
		// 	<div>
		// 		<img className="size-10 rounded-box" src={track.album.images[0]?.url} alt={track.name} />
		// 	</div>
		// 	<div className="list-col-grow">
		// 		<div>{track.artists.map((a) => a.name).join(", ")}</div>
		// 		<div className="text-xs uppercase font-semibold opacity-60">{track.name}</div>
		// 	</div>
		// 	{user?.product?.includes('premium') && <>
		// 		<button className="btn btn-square btn-ghost" onClick={() => playTrack(track.uri)}>
		// 			<svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
		// 		</button>
		// 	</>}
		// </li>
		<li className="flex items-center gap-3 p-2 hover:bg-base-200 rounded transition">
			<div className="text-lg font-thin opacity-30 w-6">{track.track_number}</div>
			<img src={track.album.images[0]?.url} alt={track.name} className="size-10 rounded-md" />
			<div className="flex-1 min-w-0">
				<p className="truncate text-sm font-medium">{track.artists.map((a) => a.name).join(", ")}</p>
				<p className="text-xs uppercase opacity-60 truncate">{track.name}</p>
			</div>
			{user?.product?.includes('premium') && (
				<button className="btn btn-square btn-ghost" onClick={() => playTrack(track.uri)} aria-label="Play track">
					<svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
						<path d="M6 3L20 12 6 21V3z" stroke="currentColor" strokeWidth="2" />
					</svg>
				</button>
			)}
		</li>
	)
}