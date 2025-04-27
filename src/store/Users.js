import { writable } from "svelte/store";
import { browser } from "$app/environment"

export let userInfo = writable({});
export let envVars = writable({});
export let currentMenu = writable({});