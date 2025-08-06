import { useUserStore } from "../store/useUserStore";
import { getProfile, getTopTracks, getTopArtists, getPlaylists, getDevices } from "./spotifyAPI";

export const loadUserSpotifyData = async () => {
	const { setUserData } = useUserStore.getState();

	try {
		const [
			userProfile,
			devices,
			topTracks,
			topArtists,
			playlists
		] = await Promise.all([
			getProfile(),
			getDevices(),
			getTopTracks(5),
			getTopArtists(5),
			getPlaylists(10)
		]);

		setUserData({
			userProfile,
			devices,
			topTracks,
			topArtists,
			playlists
		});
	} catch (error) {
		console.error('Failed to load Spotify data:', error);
	}
};