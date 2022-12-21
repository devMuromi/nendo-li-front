<script>
	import Nendoroid from '../Nendoroid.svelte';
	export let series;

	const nendoroids = series.nendoroid_set;
</script>

<!-- {#await promise}
	<p>...waiting</p>
{:then data}
	<div class="series">
		{#each nendoroid as data.nendoroid_set}
			<Nendoroid {nendoroid}/>
		{/each}
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await} -->

<h2>시리즈 목록</h2>
<div class="series">
	{#each nendoroids as nendoroid}
		<Nendoroid {nendoroid} />
	{/each}
</div>

<!-- <style>
	.series {
	}
</style> -->
