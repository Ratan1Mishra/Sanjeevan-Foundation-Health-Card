

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/donation/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.5bb3d28b.js","_app/immutable/chunks/index.30e59bc6.js","_app/immutable/chunks/footer.628f65b7.js"];
export const stylesheets = ["_app/immutable/assets/4.e3cdd44d.css","_app/immutable/assets/footer.35c81121.css"];
export const fonts = [];
