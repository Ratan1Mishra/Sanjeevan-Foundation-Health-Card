

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.1e7cfaa2.js","_app/immutable/chunks/index.30e59bc6.js","_app/immutable/chunks/footer.628f65b7.js"];
export const stylesheets = ["_app/immutable/assets/3.e6fe8a62.css","_app/immutable/assets/footer.35c81121.css"];
export const fonts = [];
