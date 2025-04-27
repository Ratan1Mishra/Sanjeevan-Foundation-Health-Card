

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/health/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.edfc0876.js","_app/immutable/chunks/index.30e59bc6.js","_app/immutable/chunks/footer.628f65b7.js"];
export const stylesheets = ["_app/immutable/assets/6.937150f9.css","_app/immutable/assets/footer.35c81121.css"];
export const fonts = [];
