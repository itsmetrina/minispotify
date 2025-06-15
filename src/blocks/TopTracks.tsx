import { useState, useEffect } from 'react';
import { getTopTracks } from '../api/spotify';

type Track = {
    id: string;
    name: string;
};

const TopTracks = () => {
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTopTracks();
            console.log('Top Tracks:', data);
            setTracks(data);
        };
        fetchData();
    }, []);

    return (
        <div className='flex items-center'>
            {tracks.map((track) => (
                <div key={track.id} className='flex items-center mr-4'>
                    {/* <img src={`https://i.scdn.co/image/${track.id}`} alt={track.name} className='w-10 h-10 rounded-full mr-2' /> */}
                    <span>{track.name}</span>
                </div>
            ))}
        </div>
    );
}

export default TopTracks