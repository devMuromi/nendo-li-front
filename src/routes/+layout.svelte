<script>
	let isLogin = false;
	let navbarOpen = false;

	function closeNavbar() {
		navbarOpen = false;
	}
</script>

<div class="root">
	<div class="header">
		<button
			class="nav-toggle-button"
			on:click={() => {
				navbarOpen = !navbarOpen;
			}}>///</button
		>
		<div class="header-title">Nendo-li</div>
		{#if isLogin}
			<a class="header-login" href="/logout">로그아웃</a>
		{:else}
			<a class="header-login" href="/login">로그인</a>
		{/if}

		<!-- 오른쪽에 로그인 로그아웃 넣음 될듯 -->
	</div>
	{#if navbarOpen}
		<nav class="nav">
			<div class="nav__item"><a class="nav__text" href="/" on:click={closeNavbar}>Home</a></div>
			<div class="nav__item">
				<a class="nav__text" href="/nendoroids" on:click={closeNavbar}>넨도로이드</a>
			</div>
			<div class="nav__item">
				<a class="nav__text" href="/series" on:click={closeNavbar}>시리즈</a>
			</div>
			<div class="nav__item"><a class="nav__text" href="/news" on:click={closeNavbar}>뉴스</a></div>
			{#if isLogin}
				<div class="nav__item">
					<a class="nav__text" href="/mypage" on:click={closeNavbar}>마이페이지</a>
				</div>
				<div class="nav__item">
					<a class="nav__text" href="/logout" on:click={closeNavbar}>로그아웃</a>
				</div>
			{:else}{/if}
		</nav>
	{/if}

	<div class="main">
		<slot />
	</div>
</div>

<style>
	.root {
		width: 100%;
		height: 100%;
		--color2: #1363df;
		--color2dark: #0d4db5;
		--color4: #dff6ff;
	}
	:global(body) {
		margin: 0px;
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
	}

	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-color: var(--color2);

		font-size: 20px;
		color: white;
	}
	.header-title {
		display: inline-block;
	}
	.header-login {
		display: inline-block;
		float: right;
		margin-right: 16px;

		color: white;
		text-decoration-line: none;
	}
	.nav-toggle-button {
		display: inline-block;
		background-color: var(--color2);
		border: none;
		height: 40px;
	}
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		width: 192px;
		height: 100%;
		margin-top: 40px;

		background-color: white;
		border-right: 1px solid lightgray;
	}
	.nav-button:hover {
		background-color: var(--color2dark);
	}
	.nav__item:hover {
		background-color: var(--color4);
	}
	.nav__item {
		flex-basis: 32px;
		line-height: 32px;
	}
	.nav__text {
		color: black;
		font-size: 14px;
		text-decoration-line: none;
		padding-left: 12px;
		overflow: hidden;
	}
	.main {
		width: auto;
		margin-top: 40px;
		padding: 16px;
	}
</style>
