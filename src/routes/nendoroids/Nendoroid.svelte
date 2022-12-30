<script>
	export let nendoroid;
</script>

<div class="nendo-block">
	<a href="/nendoroids/{nendoroid.number}">
		<div class="text-center">
			<img class="rounded" src={nendoroid.image_link} width="112px" />
		</div>
		<div>{nendoroid.number} {nendoroid.name_ko}</div>
	</a>
</div>

<style>
	img {
	}
	.nendo-block {
		display: inline-block;
		width: 128px;
		height: 196px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 8px;
		margin: 2px;

		font-size: 13px;
		overflow: hidden;
	}
</style>
