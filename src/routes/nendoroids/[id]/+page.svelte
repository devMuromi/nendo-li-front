<script>
	export let data;
	import Series from '../../series/Series.svelte';
</script>

{#await data}
	<p>...waiting</p>
{:then data}
	<div class="nendoroid-info">
		<div class="nendoroid-info__name">{data.nendoroid.number} {data.nendoroid.name_ko}</div>
		<div class="row">
			<div class="col-2 nendoroid-info__image ">
				<img src={data.nendoroid.image_link} alt="nendo" height="128px" />
			</div>
			<div class="col-10">
				<div class="nendoroid-info__gender">성별 : {data.nendoroid.gender}</div>
				<div>출시일: {data.nendoroid.release_date.join(', ')}</div>
				<!-- <div>제조사: {data.nendoroid.manufacturer}</div> -->
				<!-- <div>Sculptor: {data.nendoroid.sculptor}</div> -->
			</div>
		</div>
		<div>
			<h2>시리즈 목록</h2>
			<Series series={data.series} />
		</div>
		<div>
			<h2>넨도로이드 사진</h2>
			{#each data.nendoroid.nendoroidphoto_set as image}
				<img src={image.photoURL} alt="nendoroid" height="512px" />
			{/each}
		</div>
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
	.nendoroid-info {
		margin: 8px;
	}
	.nendoroid-info__name {
		font-size: 64px;
	}
</style>
