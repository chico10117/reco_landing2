import * as server from '../entries/pages/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.D5jOwju9.js","_app/immutable/chunks/C7KQB0s1.js","_app/immutable/chunks/QF1L1msK.js","_app/immutable/chunks/ChcLEQ0r.js","_app/immutable/chunks/BhYac13y.js","_app/immutable/chunks/DewEHAxx.js","_app/immutable/chunks/46L4nFw0.js","_app/immutable/chunks/CpT1-BfX.js","_app/immutable/chunks/nrVyZHCx.js","_app/immutable/chunks/D9oJOz2-.js","_app/immutable/chunks/DfX-xxun.js","_app/immutable/chunks/7C6kAMGE.js","_app/immutable/chunks/Bq-07yf4.js","_app/immutable/chunks/UlTn_8lR.js"];
export const stylesheets = [];
export const fonts = [];
