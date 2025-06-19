import TopTracks from "../blocks/TopTracks"

const Dashboard = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4 p-2">
            <div className="border border-green-400 rounded-lg p-4">
                <TopTracks />
            </div>
            <div className="border border-green-400 rounded-lg p-4">Top Artists</div>
            <div className="border border-green-400 rounded-lg p-4">Followings</div>
            <div className="border border-green-400 rounded-lg p-4">Recently Played</div>
            <div className="border border-green-400 rounded-lg p-4">1</div>
            <div className="border border-green-400 rounded-lg p-4">1</div>
            <div className="border border-green-400 rounded-lg p-4">1</div>
            <div className="border border-green-400 rounded-lg p-4">1</div>
            <div className="border border-green-400 rounded-lg p-4">1</div>
        </div>
    )
}

export default Dashboard