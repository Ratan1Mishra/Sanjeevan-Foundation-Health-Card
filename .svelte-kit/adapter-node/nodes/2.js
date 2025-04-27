

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d1b0df44.js","_app/immutable/chunks/index.30e59bc6.js","_app/immutable/chunks/footer.628f65b7.js","_app/immutable/chunks/navigation.bdee17a2.js","_app/immutable/chunks/singletons.ebcce9d8.js"];
export const stylesheets = ["_app/immutable/assets/2.8accef52.css","_app/immutable/assets/footer.35c81121.css"];
export const fonts = [];
