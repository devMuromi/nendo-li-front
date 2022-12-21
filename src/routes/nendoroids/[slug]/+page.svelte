<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const id = data.id.slug;
	import Series from './Series.svelte';

	async function getNendoroidData() {
		console.log('시작~');
		const url = `http://127.0.0.1:8000/nendoroid/nendoroid/${id}`;
		const res = await fetch(url);
		const nendoroid = await res.json();
		const seriesRes = await fetch(`http://127.0.0.1:8000/nendoroid/series/${nendoroid.series}`);
		const series = await seriesRes.json();

		if (res.ok && seriesRes.ok) {
			data = { nendoroid: nendoroid, series: series };
			console.log('넨도로이드', nendoroid);
			console.log(data);
			return data;
		} else {
			throw new Error(data);
		}
	}
	let promise = getNendoroidData();
</script>

{#await promise}
	<p>...waiting</p>
{:then data}
	<div class="nendoroid-info">
		<div class="nendoroid-info__name">{data.nendoroid.number} {data.nendoroid.name_ko}</div>
		<div class="nendoroid-info__image">
			<img src={data.nendoroid.image_link} alt="nendo" height="128px" />
		</div>
		<div class="nendoroid-info__gender">성별 : {data.nendoroid.gender}</div>
		<div>출시일: ~~~ 리스트</div>
		<div>속한 시리즈 블럭, 시리즈 명과 속한 다른 넨도 표기</div>
		<div>개인 사진 올리는 기능</div>

		<Series series={data.series} />
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<!-- {#if dataa}
	<div class="nendoroid-info">
		<div class="nendoroid-info__name">{dataa.number} {dataa.name_ko}</div>
		<div class="nendoroid-info__image">
			<img src={dataa.image_link} alt="nendo" height="128px" />
		</div>
		<div class="nendoroid-info__gender">성별 : {dataa.gender}</div>
		<div>출시일: ~~~ 리스트</div>
		<div>속한 시리즈 블럭, 시리즈 명과 속한 다른 넨도 표기</div>
		<div>개인 사진 올리는 기능</div>

		<Series />
	</div>
{:else}
	<p>loading...</p>
{/if} -->
<style>
	.nendoroid-info {
		margin: 8px;
	}
	.nendoroid-info__name {
		font-size: 64px;
	}
</style>
