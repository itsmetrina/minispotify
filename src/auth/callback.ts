import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../api/config";
import { useAuthStore } from "../store/useAuthStore";

const clientId = SPOTIFY_CLIENT_ID;
const redirectUri = SPOTIFY_REDIRECT_URI;


export const handleRedirectCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const { setAccessToken } = useAuthStore.getState();

    if (!code) return;

    const codeVerifier = useAuthStore.getState().codeVerifier;
    if (!codeVerifier) {
        throw new Error("No code_verifier found in store");
    }

    const url = "https://accounts.spotify.com/api/token";
    const payload = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id: clientId,
            grant_type: "authorization_code",
            code,
            redirect_uri: redirectUri,
            code_verifier: codeVerifier || ""
        }),
    }

    const body = await fetch(url, payload);
    const response = await body.json();

    setAccessToken(response.access_token);
    useAuthStore.getState().clearCodeVerifier();
    
    // Optionally redirect to welcome or dashboard
    window.location.href = "/welcome";
};