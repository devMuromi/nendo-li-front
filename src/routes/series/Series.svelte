<script>
	import Nendoroid from '../nendoroids/Nendoroid.svelte';
	export let series;

	const nendoroids = series.nendoroid_set;
</script>

<div>
	{#each nendoroids as nendoroid}
		<Nendoroid {nendoroid} />
	{/each}
</div>
