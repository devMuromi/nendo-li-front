<script>
	import Nendoroid from '../nendoroids/Nendoroid.svelte';
	export let series;

	const nendoroids = series.nendoroid_set;
</script>

<div class="series-block">
	<h4>{series.name_ko}</h4>
	{#each nendoroids as nendoroid}
		<Nendoroid {nendoroid} />
	{/each}
</div>

<style>
	.series-block {
		background-color: var(--color5);
		display: inline-block;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 6px;
		margin: 8px;
	}
</style>
