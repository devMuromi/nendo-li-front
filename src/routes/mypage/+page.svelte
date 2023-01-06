<script>
	import { token } from '../../stores.js';
	let bearerToken = `Bearer ` + $token;
	async function getData() {
		const url = `http://127.0.0.1:8000/user/`;
		const res = await fetch(url, {
			headers: {
				Authorization: bearerToken
			}
		});
		const userData = await res.json();
		return userData;
	}
</script>

<div class="container">
	<h2>마이페이지</h2>
	{#await getData()}
		<p>로딩중...</p>
	{:then data}
		<h3>Id: {data.username}</h3>
		<h3>Email: {data.email}</h3>
		<h3>넨도로이드 사진</h3>
		{#each data.nendoroidphoto_set as photo}
			<img src={photo.photoURL} alt="Nendoroid" />
		{/each}
	{:catch error}
		<p>에러가 발생했습니다.</p>
	{/await}
</div>
