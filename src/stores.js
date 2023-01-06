import { readable, writable } from 'svelte/store';

export const token = writable(null);
export const refreshToken = writable(null);
