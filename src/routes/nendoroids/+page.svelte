<script>
	import Nendoroid from './Nendoroid.svelte';

	let nendoroids = [];
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
		getNendoroid();
	}

	async function getNendoroid() {
		const url = `http://127.0.0.1:8000/nendoroid/nendoroids/?numbering=${currentNumbering}`;
		const res = await fetch(url);
		nendoroids = await res.json();
	}

	getNendoroid();
</script>

<h1>넨도로이드 {currentNumbering} - {currentNumbering.slice(0, -2) + '99'}</h1>
<div>
	<div class="searchbar">
		<input type="text" placeholder="Search..." />
		<button>Search</button>
	</div>
</div>

<span class="category">
	<span class="category__title">번호</span>
	{#each numberings as numbering}
		<button on:click={changeNumbering} name={numbering} class="category__item"
			>{numbering} - {numbering.slice(0, -2) + '99'}</button
		>
	{/each}
</span>

<div class="nendoroids-container">
	{#each nendoroids as nendoroid}
		<Nendoroid {nendoroid} />
	{:else}
		<p>loading...</p>
	{/each}
</div>

<style>
	.nendoroids-container {
		/* display: grid; */
		/* grid-template-columns: repeat(auto-fill, 100px); */
		/* grid-auto-columns: 116px; */
		/* gap: 1px; */
	}
	.category {
		display: flex;
		border: 2px solid #aaaaaa;
		padding: 8px 0px 8px 0px;
	}
	.category__title {
		margin-right: 8px;
		padding: 4px;
	}
	.category__item {
		margin-right: 8px;
		padding: 4px;
		background-color: white;
		border: 1px solid #aaaaaa;
		border-radius: 8px;
	}
	.category__item:hover {
		background-color: #dcdcdc;
	}
	.category__item:active {
		background-color: #aaaaaa;
	}
</style>
