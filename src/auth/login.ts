import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from '../api/config';
import { generateCodeChallenge, generateCodeVerifier } from '../utils/pkce';

const clientId = SPOTIFY_CLIENT_ID;
const redirectUri = SPOTIFY_REDIRECT_URI;
const scope = 'user-read-private user-read-email';
const authUrl = new URL('https://accounts.spotify.com/authorize');

export const redirectToSpotifyLogin = async () => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    // Store verifier to use later when exchanging the token
    window.sessionStorage.setItem('code_verifier', codeVerifier);

    const params = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
    });

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
};