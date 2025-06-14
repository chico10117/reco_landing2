/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
  readonly PUBLIC_HOTJAR_ID: string;
  readonly PUBLIC_ANALYTICS_ENABLED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}