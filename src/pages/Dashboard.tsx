import { ArtistCard } from "../blocks/ArtistCard"
import { Grid } from "../blocks/Grid"
import { PlaylistCard } from "../blocks/PlaylistCard"
import { Section } from "../blocks/Section"
import { TrackCard } from "../blocks/TrackCard"
import { useUserStore } from "../store/useUserStore"

const Dashboard = () => {
    const {
        // userProfile,
        topTracks,
        topArtists,
        recentlyPlayed,
        // currentlyPlaying,
        playlists,
    } = useUserStore();

    return (
        <div className="p-6 space-y-10">
            {/* <Header user={userProfile} /> */}

            {/* <Section title="Currently Playing">
                {currentlyPlaying ? (
                    <TrackCard track={currentlyPlaying.item} />
                ) : (
                    <p>Nothing playing right now.</p>
                )}
            </Section> */}

            <Section title="Top 5 Tracks">
                <Grid>
                    {topTracks?.map((track) => (
                        <TrackCard key={track.id} track={track} />
                    ))}
                </Grid>
            </Section>

            {/* <Section title="Top 5 Artists">
                <Grid>
                    {topArtists?.items.map((artist) => (
                        <ArtistCard key={artist.id} artist={artist} />
                    ))}
                </Grid>
            </Section>

            <Section title="Recently Played">
                <Grid>
                    {recentlyPlayed?.items.map((item) => (
                        <TrackCard key={item.track.id} track={item.track} />
                    ))}
                </Grid>
            </Section>

            <Section title="Your Playlists">
                <Grid>
                    {playlists?.items.map((pl) => (
                        <PlaylistCard key={pl.id} playlist={pl} />
                    ))}
                </Grid>
            </Section> */}
        </div>
    )
}

export default Dashboard