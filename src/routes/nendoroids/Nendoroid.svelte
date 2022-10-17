<script>
	export let data = '';
	// let promise = getAPIData();

	// function handleClick() {
	// 	promise = getAPIData();
	// }
</script>

<div class="nendo-block">
	<!-- <img src={data.image_link} height="128px" /> -->
	<div>Nendo: {data.name_ko}</div>
	<a href="/nendoroids/{data.id}">링크</a>
</div>

<style>
	.nendo-block {
		display: inline-block;
		width: 80px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 8px;
		/* margin: 8px; */
	}
</style>
