export interface UserProfile {
    id: string;
    display_name: string;
    email: string;
    country: string;
    product: string;
    followers: {
        total: number;
    };
    images: {
        url: string;
        height: number;
        width: number;
    }[];
    uri: string;
}

export interface Track {
    id: string;
    name: string;
    artists: Artist[];
    album: Album;
    duration_ms: number;
    popularity: number;
    uri: string;
}

export interface Artist {
    id: string;
    name: string;
    images: {
        url: string;
        height: number;
        width: number;
    }[];
    popularity: number;
}

export interface TopTracks {
    items: Track[];
}

export interface TopArtists {
    items: Artist[];
}

export interface FollowedArtists {
    artists: {
        items: Artist[];
        next: string | null;
        total: number;
    };
}

export interface SavedTrack {
    added_at: string;
    track: Track;
}

export interface SavedTracks {
    items: SavedTrack[];
    total: number;
    next: string | null;
    href: string;
}

export interface Show {
    id: string;
    name: string;
    publisher: string;
    description: string;
    images: {
        url: string;
        height: number;
        width: number;
    }[];
}

export interface SavedShows {
    items: {
        added_at: string;
        show: Show;
    }[];
    total: number;
}

export interface Playlist {
    id: string;
    name: string;
    description: string;
    owner: {
        id: string;
        display_name: string;
    };
    images: {
        url: string;
        height: number;
        width: number;
    }[];
    tracks: {
        total: number;
    };
}

export interface Playlists {
    items: Playlist[];
    total: number;
    next: string | null;
}

export interface RecentlyPlayedTrack {
    track: Track;
    played_at: string;
}

export interface RecentlyPlayedTracks {
    items: RecentlyPlayedTrack[];
}

export interface Queue {
    currently_playing: Track | null;
    queue: Track[];
}

export interface CurrentlyPlayingTrack {
    is_playing: boolean;
    progress_ms: number;
    item: Track;
}

export interface Device {
    id: string;
    name: string;
    type: string;
    is_active: boolean;
    volume_percent: number;
}

export interface Devices {
    devices: Device[];
}

export interface PlaybackState {
    is_playing: boolean;
    progress_ms: number;
    item: Track;
}

export interface SavedEpisode {
    added_at: string;
    episode: {
        id: string;
        name: string;
        description: string;
        audio_url: string;
        show: {
            id: string;
            name: string;
            publisher: string;
        };
    };
}

export interface SavedEpisodes {
    items: SavedEpisode[];
    total: number;
}

export interface SavedAudiobook {
    id: string;
    name: string;
    author: string;
    description: string;
}

export interface SavedAudiobooks {
    items: SavedAudiobook[];
    total: number;
}

export interface Album {
    id: string;
    name: string;
    images: {
        url: string;
        height: number;
        width: number;
    }[];
}

export interface SavedAlbum {
    added_at: string;
    album: Album;
}

export interface SavedAlbums {
    items: SavedAlbum[];
    total: number;
}