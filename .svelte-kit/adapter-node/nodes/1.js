

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.47c123e2.js","_app/immutable/chunks/index.30e59bc6.js","_app/immutable/chunks/singletons.ebcce9d8.js"];
export const stylesheets = [];
export const fonts = [];
