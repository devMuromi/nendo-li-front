/** @type {import('./$types').PageLoad} */
export function load({ fetch, params }) {
	async function getData(id) {
		const url = `http://127.0.0.1:8000/api/nendoroids/${id}`;
		const res = await fetch(url);
		const nendoroid = await res.json();
		const seriesRes = await fetch(`http://127.0.0.1:8000/api/series/${nendoroid.series}`);
		const series = await seriesRes.json();
		return { nendoroid: nendoroid, series: series };
	}
	return getData(params.id);
}
