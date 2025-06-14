/// <reference types="readonly VITE/client" />

interface ImportMetaEnv {
    readonly VITE_CLIENT_ID: 'string';
    readonly VITE_CLIENT_SECRET: 'string';
    readonly VITE_REDIRECT_URI: 'string';
    readonly VITE_REDIRECT_URI_PROD: 'string';
    readonly VITE_API_BASE_URL: 'string';
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}