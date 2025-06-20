import { getFollowedArtists, getSavedTracks, getTopArtists, getTopTracks, getProfile, getSavedShows, getPlaylists, getRecentlyPlayed, getSavedAlbums, getSavedAudiobooks, getSavedEpisodes } from "./spotifyAPI";
import { useUserStore } from "../store/useUserStore";

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
			followedArtists,
			savedTracks,
			savedShows,
			playlists,
			recentlyPlayed,
			// queue,
			// currentlyPlayingTrack,
			// availableDevices,
			// playbackState,
			savedEpisodes,
			savedAudiobooks,
			savedAlbums
		] = await Promise.all([
			getProfile(),
			getTopTracks(5),
			getTopArtists(5),
			getFollowedArtists(10),
			getSavedTracks(10),
			getSavedShows(10),
			getPlaylists(10),
			getRecentlyPlayed(10),
			// getQueue(),
			// getCurrentlyPlaying(),
			// getAvailableDevices(),
			// getPlaybackState(),
			getSavedEpisodes(10),
			getSavedAudiobooks(10),
			getSavedAlbums(10)
		]);

		setUserData({
			userProfile,
			topTracks,
			topArtists,
			followedArtists,
			savedTracks,
			savedShows,
			playlists,
			recentlyPlayed,
			// queue,
			// currentlyPlayingTrack,
			// availableDevices,
			// playbackState,
			savedEpisodes,
			savedAudiobooks,
			savedAlbums
		});
	} catch (error) {
		console.error('Failed to load Spotify data:', error);
	}
};