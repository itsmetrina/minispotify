export interface User {
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

export interface Device {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number;
    supports_volume: boolean;
}

export interface Devices {
    devices: Device[];
}

export interface Track {
    id: string;
    name: string;
    track_number: number;
    album: Album;
    artists: Artist[];
    external_urls: {
        spotify: string;
    };
    popularity: number;
    uri: string;
    is_playable: boolean;
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
    followers: {
        total: number;
    }
}

export interface Playlist {
    id: string;
    name: string;
    description: string;
    public: boolean;
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

export interface Album {
    id: string;
    name: string;
    is_playable: boolean;
    images: {
        url: string;
        height: number;
        width: number;
    }[];
}