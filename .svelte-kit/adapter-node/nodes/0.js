

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7caa3abc.js","_app/immutable/chunks/index.30e59bc6.js","_app/immutable/chunks/navigation.bdee17a2.js","_app/immutable/chunks/singletons.ebcce9d8.js","_app/immutable/chunks/DataService.ca37d2dc.js"];
export const stylesheets = ["_app/immutable/assets/0.b7828296.css"];
export const fonts = [];
