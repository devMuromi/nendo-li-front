<script>
	import Nendoroid from './Nendoroid.svelte';
	import { onMount } from 'svelte';

	let datas = [];

	onMount(async () => {
		const url = 'http://127.0.0.1:8000/nendoroid/nendoroid/';

		const res = await fetch(url);
		datas = await res.json();

		// if (res.ok) {
		//     return data;
		// } else {
		//     throw new Error("error");
		// }
	});

	// let nendoroids = getAPIData();

	// let nendoroids = []
	// for (let i = 3; i < 2000; i++){
	//     nendoroids.push(i)
	// }
</script>

<h1>Nendoroids</h1>
<div class="nendoroids-container">
	{#each datas as data}
		<Nendoroid {data} />
	{:else}
		<p>loading...</p>
	{/each}
</div>

<style>
	.nendoroids-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, 128px);
		/* grid-auto-columns: 116px; */
		gap: 12px;
	}
</style>
