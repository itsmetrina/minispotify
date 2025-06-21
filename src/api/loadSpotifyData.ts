import { useUserStore } from "../store/useUserStore";
import { getProfile, getTopTracks, getTopArtists, getPlaylists } from "./spotifyAPI";

const isStale = (timestamp: number | null, ttlMinutes = 60) => {
	if (!timestamp) return true;
	return Date.now() - timestamp > ttlMinutes * 60 * 1000;
};

export const loadUserSpotifyData = async () => {
	const { setUserData, lastFetchedAt } = useUserStore.getState();
	if (!isStale(lastFetchedAt)) return true;

	try {
		const [
			userProfile,
			topTracks,
			topArtists,
			playlists
		] = await Promise.all([
			getProfile(),
			getTopTracks(5),
			getTopArtists(5),
			getPlaylists(10)
		]);

		setUserData({
			userProfile,
			topTracks,
			topArtists,
			playlists
		});
	} catch (error) {
		console.error('Failed to load Spotify data:', error);
	}
};