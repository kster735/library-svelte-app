import { writable } from "svelte/store";

const storedTheme = (localStorage) ? localStorage.getItem('theme') : "auto";

export const activeTheme = writable(storedTheme ?? 'auto');