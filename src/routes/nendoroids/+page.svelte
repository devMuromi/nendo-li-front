<script>
	import Nendoroid from './Nendoroid.svelte';
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';

	let datas = [];

	const numberings = [
		'000',
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
		'1000',
		'1100',
		'1200',
		'1300',
		'1400',
		'1500',
		'1600',
		'1700',
		'1800',
		'1900',
		'2000'
	];
	let currentNumbering = '000';

	function changeNumbering(e) {
		currentNumbering = e.target.name;
		// getNendoroid();
	}

	// async function getNendoroid() {
	// 	const url = `http://127.0.0.1:8000/nendoroid/nendoroid/?numbering=${currentNumbering}`;

	// 	const res = await fetch(url);
	// 	datas = await res.json();
	// }

	afterUpdate(async () => {
		const url = `http://127.0.0.1:8000/nendoroid/nendoroid/?numbering=${currentNumbering}`;

		const res = await fetch(url);
		datas = await res.json();
	});

	onMount(async () => {
		const url = `http://127.0.0.1:8000/nendoroid/nendoroid/?numbering=${currentNumbering}`;

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

<h1>Nendoroids {currentNumbering}</h1>
<div class="numbering">
	{#each numberings as numbering}
		<button on:click={changeNumbering} name={numbering} class="numbering__item"
			>{numbering} - {numbering.slice(0, -2) + '99'}</button
		>
	{/each}
</div>

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
	.numbering {
		display: flex;
	}
	.numbering__item {
	}
</style>
