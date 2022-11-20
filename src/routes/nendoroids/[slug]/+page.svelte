<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let id = data.id.slug;
	console.log(id);
	// let id = $page.parans.slug;

	async function getNendoroidData() {
		const res = await fetch(`http://127.0.0.1:8000/nendoroid/nendoroid/${id}`);
		let data = await res.text();

		if (res.ok) {
			data = JSON.parse(data);
			return data;
		} else {
			throw new Error(data);
		}
	}

	let promise = getNendoroidData();

	// function handleClick() {
	// 	promise = getNendoroidData();
	// }
</script>

{#await promise}
	<p>...waiting</p>
{:then data}
	<div class="nendoroid-info">
		<div class="nendoroid-info__name">{data.number} {data.name_ko}</div>
		<div class="nendoroid-info__image">
			<img src={data.image_link} alt="nendo" height="128px" />
		</div>
		<div class="nendoroid-info__gender">성별 : {data.gender}</div>
		<div>출시일: ~~~ 리스트</div>
		<div>속한 시리즈 블럭, 시리즈 명과 속한 다른 넨도 표기</div>
		<div>개인 사진 올리는 기능</div>
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
