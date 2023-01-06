<script>
	import { token, refreshToken } from '../../stores.js';
	let isLogin = false;

	let id;
	let password;

	async function postLogin() {
		await fetch('http://127.0.0.1:8000/auth/token/obtain/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: id,
				password: password
			})
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.access) {
					isLogin = true;
					token.set(data.access);
					refreshToken.set(data.refresh);
				} else {
					alert(data.detail);
				}
			});
	}
</script>

<div class="container">
	<div>
		<p>access token: {$token}</p>
		<p>refresh token: {$refreshToken}</p>
	</div>
	<h2>로그인</h2>
	<form on:submit|preventDefault={postLogin}>
		<div class="">
			<label class="form-label" for="id">이메일</label>
			<input class="form-control" type="" id="id" placeholder="아이디를 입력해주세요" bind:value={id} />
		</div>
		<div class="">
			<label class="form-label" for="password">비밀번호</label>
			<input class="form-control" type="password" id="password" placeholder="비밀번호를 입력해주세요" bind:value={password} />
		</div>
		<div class="">
			<button class="btn btn-light" type="submit" on:click|preventDefault={postLogin}>로그인</button>
		</div>
	</form>
</div>
