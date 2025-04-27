

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/terms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.ba55bab8.js","_app/immutable/chunks/index.30e59bc6.js","_app/immutable/chunks/footer.628f65b7.js"];
export const stylesheets = ["_app/immutable/assets/8.3869ef8a.css","_app/immutable/assets/footer.35c81121.css"];
export const fonts = [];
