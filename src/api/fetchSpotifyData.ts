import { getFollowedArtists, getSavedTracks, getTopArtists, getTopTracks, getProfile, getSavedShows, getPlaylists, getRecentlyPlayed, getSavedAlbums, getSavedAudiobooks, getSavedEpisodes } from "../api/spotifyAPI";
import { useUserStore } from "../store/useUserStore";

export const loadUserSpotifyData = async () => {
	try {
		const [
			profile,
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

		useUserStore.getState().setUserData({
			userProfile: profile,
			topTracks: topTracks,
			topArtists: topArtists,
			followedArtists: followedArtists,
			savedTracks: savedTracks,
			savedShows: savedShows,
			playlists: playlists,
			recentlyPlayed: recentlyPlayed,
			// queue: queue,
			// currentlyPlayingTrack: currentlyPlayingTrack,
			// availableDevices: availableDevices,
			// playbackState: playbackState,
			savedEpisodes: savedEpisodes,
			savedAudiobooks: savedAudiobooks,
			savedAlbums: savedAlbums
		});
	} catch (error) {
		console.error('Failed to load Spotify data:', error);
	}
};
