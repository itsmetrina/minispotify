import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } from "../api/config";

const CLIENT_ID = SPOTIFY_CLIENT_ID;
const REDIRECT_URI = SPOTIFY_REDIRECT_URI;

export async function handleCallback() {
    const hash = window.location.hash;
    if (!hash) {
        console.error("No hash found in URL");
        return;
    }
    
    const params = new URLSearchParams(hash.replace("#", ""));
    const accessCode = params.get("code");
    const error = params.get("error");
    const codeVerifier = sessionStorage.getItem("codeVerifier");

    if (!codeVerifier) {
        console.error("Code verifier not found in session storage");
        return;
    }
    if (error) {
        console.error("Error during authentication:", error);
        return;
    }
    if (!accessCode) {
        console.error("No access code found in URL");
        return;
    }

    const body = new URLSearchParams({
        grant_type: "authorization_code",
        code: accessCode,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        code_verifier: codeVerifier,
    });
    
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: body.toString(),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        sessionStorage.setItem("accessToken", data.access_token);
        sessionStorage.setItem("refreshToken", data.refresh_token);
        console.log("Authentication successful, tokens stored in session storage.");
    } catch (error) {
        console.error("Error during token exchange:", error);
    }
}
