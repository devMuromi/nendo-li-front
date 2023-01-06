<script>
	import Nendoroid from './Nendoroid.svelte';

	let nendoroids = [];
	const numberings = ['000', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];
	let currentNumbering = '000';

	function changeNumbering(e) {
		currentNumbering = e.target.name;
		getNendoroid();
	}

	async function getNendoroid() {
		const url = `http://127.0.0.1:8000/api/nendoroids/?numbering=${currentNumbering}`;
		const res = await fetch(url);
		nendoroids = await res.json();
	}

	getNendoroid();
</script>

<div>
	<h2>넨도로이드 {currentNumbering} - {currentNumbering.slice(0, -2) + '99'}</h2>
	<!-- <div>
		<div class="searchbar">
			<input type="text" placeholder="Search..." />
			<button>Search</button>
		</div>
	</div> -->

	<div class="">
		{#each numberings as numbering}
			{#if numbering == currentNumbering}
				<button on:click={changeNumbering} name={numbering} class="btn btn-primary btn-sm">{numbering}~</button>
				<span />
			{:else}
				<button on:click={changeNumbering} name={numbering} class="btn btn-outline-primary btn-sm mr-1">{numbering}~</button>
				<span />
			{/if}
		{/each}
	</div>

	<div class="">
		{#each nendoroids as nendoroid}
			<Nendoroid {nendoroid} />
		{:else}
			<p>loading...</p>
		{/each}
	</div>
</div>

<style>
</style>
