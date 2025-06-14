import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from '../api/config';

const clientId = SPOTIFY_CLIENT_ID;
const redirectUri = SPOTIFY_REDIRECT_URI;


export const handleRedirectCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (!code) return;

    const codeVerifier = sessionStorage.getItem('code_verifier');

    const url = 'https://accounts.spotify.com/api/token';
    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: clientId,
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
            code_verifier: codeVerifier || ''
        }),
    }

    const body = await fetch(url, payload);
    const response = await body.json();

    sessionStorage.setItem('access_token', response.access_token);
    sessionStorage.removeItem('code_verifier');

    // Optionally redirect to home or dashboard
    window.location.href = '/';
};