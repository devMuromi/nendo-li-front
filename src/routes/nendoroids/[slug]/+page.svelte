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
	<div>
		nendo number : {data.number}
		nendo name : {data.name_ko}
		<img src={data.image_link} alt="nendo" height="128px" />
		nendo gender : {data.gender}
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
