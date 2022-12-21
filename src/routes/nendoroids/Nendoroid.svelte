<script>
	export let nendoroid;
</script>

<div class="nendo-block">
	<a href="/nendoroids/{nendoroid.number}">
		<img src={nendoroid.image_link} height="96px" />
		<div>{nendoroid.number} {nendoroid.name_ko}</div>
	</a>
</div>

<style>
	.nendo-block {
		display: inline-block;
		width: 96px;
		height: 128px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 8px;
		margin: 2px;

		font-size: 12px;
		overflow: hidden;
	}
</style>
