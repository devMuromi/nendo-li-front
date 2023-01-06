<script>
	import Series from './Series.svelte';

	let seriesList = [];
	let page = 1;

	async function getSeries() {
		const url = `http://127.0.0.1:8000/api/series/?page=${page}`;
		console.log(url);
		const res = await fetch(url);
		const seriesResponse = await res.json();
		seriesList = seriesResponse.results;
	}

	getSeries();
</script>

<h2>시리즈</h2>
<!-- <div>
	<div class="searchbar">
		<input type="text" placeholder="Search..." />
		<button>Search</button>
	</div>
</div> -->

<!-- <span class="category">
	<span class="category__title">번호</span>
	{#each numberings as numbering}
		<button on:click={changeNumbering} name={numbering} class="category__item"
			>{numbering} - {numbering.slice(0, -2) + '99'}</button
		>
	{/each}
</span> -->

<div class="">
	{#each seriesList as series}
		<Series {series} />
	{:else}
		<p>loading...</p>
	{/each}
</div>
