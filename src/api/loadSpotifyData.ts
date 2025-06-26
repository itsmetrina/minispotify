import { useUserStore } from "../store/useUserStore";
import { getProfile, getTopTracks, getTopArtists, getPlaylists } from "./spotifyAPI";

export const loadUserSpotifyData = async () => {
	const { setUserData } = useUserStore.getState();

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