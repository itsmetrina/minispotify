export function generateRandomString(length: number): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    Array.from(crypto.getRandomValues(new Uint8Array(length))).forEach((byte) => {
        result += charset[byte % charset.length];
    });
    return result;
}

export function generateCodeVerifier(): string {
    return generateRandomString(128);
}

export async function generateCodeChallenge(codeVerifier: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashBase64 = btoa(String.fromCharCode(...hashArray));
    return hashBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}