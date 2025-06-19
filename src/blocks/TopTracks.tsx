import { useState, useEffect } from "react";
import { getTopTracks } from "../api/spotifyAPI";

type Track = {
    id: string;
    name: string;
};

const TopTracks = () => {
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        fetchTopTracks();
    }, []);

    const fetchTopTracks = async () => {
        const data = await getTopTracks();
        console.log(data, 'data');
        const topTracks = data.map((d: {
            popularity: number;
            duration_ms: number; name: string;
        }) => {
            return {
                "track_name": d.name,
                "track_popularity": d.popularity,
                "track_length": d.duration_ms,

            }
        });
        console.log(topTracks, 'topTracks');
        setTracks(data);
    }

    return (
        <div className="flex items-center">
            {tracks.map((track) => (
                <div key={track.id} className="flex items-center mr-4">
                    {/* <img src={`https://i.scdn.co/image/${track.id}`} alt={track.name} className="w-10 h-10 rounded-full mr-2" /> */}
                    <span>{track.name}</span>
                </div>
            ))}
        </div>
    );
}

export default TopTracks