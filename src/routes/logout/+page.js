import { token, refreshToken } from '../../stores.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	token.set(null);
	refreshToken.set(null);
	throw redirect(307, '/');
}
