

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.33987744.js","_app/immutable/chunks/index.30e59bc6.js","_app/immutable/chunks/footer.628f65b7.js","_app/immutable/chunks/DataService.ca37d2dc.js"];
export const stylesheets = ["_app/immutable/assets/7.45c0c27e.css","_app/immutable/assets/footer.35c81121.css"];
export const fonts = [];
