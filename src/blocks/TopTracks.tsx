import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore";

const TopTracks = () => {
    // const [tracks, setTracks] = useState<Track[]>([]);
    const { topTracks } = useUserStore();

    useEffect(() => {
        // fetchTopTracks();
        console.log(topTracks)
    }, []);

    // const fetchTopTracks = async () => {
    //     const data = await getTopTracks();
    //     console.log(data, 'data');
    //     const topTracks = data.map((d: {
    //         popularity: number;
    //         duration_ms: number; name: string;
    //     }) => {
    //         return {
    //             "track_name": d.name,
    //             "track_popularity": d.popularity,
    //             "track_length": d.duration_ms,

    //         }
    //     });
    //     console.log(topTracks, 'topTracks');
    //     setTracks(data);
    // }

    return (
        <div className="flex items-center">
            {/* {topTracks?.map((track) => (
                <div key={track.id} className="flex items-center mr-4">
                    <span>{track.name}</span>
                </div>
            ))} */}
            Top Tracks
        </div>
    );
}

export default TopTracks