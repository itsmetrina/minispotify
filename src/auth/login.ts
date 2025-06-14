import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../api/config";
import { generateCodeChallenge, generateCodeVerifier } from "../utils/pkce";

const CLIENT_ID = SPOTIFY_CLIENT_ID;
const REDIRECT_URI = SPOTIFY_REDIRECT_URI;
const SCOPE = "user-top-read playlist-read-private artist-raed-private";

export async function login() {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    sessionStorage
    const authUrl = new URL("https://accounts.spotify.com/authorize");
    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: "code",
        redirect_uri: REDIRECT_URI,
        scope: SCOPE,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
    });
    authUrl.search = params.toString();
    window.location.href = authUrl.toString();
}