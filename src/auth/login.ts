import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../api/config";
import { useAuthStore } from "../store/useAuthStore";
import { generateCodeChallenge, generateCodeVerifier } from "../utils/pkce";

const clientId = SPOTIFY_CLIENT_ID;
const redirectUri = SPOTIFY_REDIRECT_URI;
const scope = ["user-read-private", "user-read-email", "user-top-read", "user-read-recently-played", "playlist-read-private", "user-follow-read"];
const authUrl = new URL("https://accounts.spotify.com/authorize");

export const redirectToSpotifyLogin = async () => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    useAuthStore.getState().setCodeVerifier(codeVerifier);

    const params = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scope.join(" "),
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
    });

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
};