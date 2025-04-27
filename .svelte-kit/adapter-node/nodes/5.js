

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.c9ef6f8b.js","_app/immutable/chunks/index.30e59bc6.js","_app/immutable/chunks/footer.628f65b7.js"];
export const stylesheets = ["_app/immutable/assets/5.dbbf8a5b.css","_app/immutable/assets/footer.35c81121.css"];
export const fonts = [];
