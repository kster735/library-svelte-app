import { writable } from 'svelte/store';

// // Get the value out of storage on load.
 
const stored = localStorage.theme ?? 'auto';
// // or localStorage.getItem('theme')

// // Set the stored value or a sane default.
export const theme = writable(stored ?? 'auto');

// // Anytime the store changes, update the local storage value.
theme.subscribe((value) => (localStorage.theme = value));
// // or localStorage.setItem('content', value)