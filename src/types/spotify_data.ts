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