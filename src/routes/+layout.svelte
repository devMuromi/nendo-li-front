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
			}}
		>
			<svg width="28px" height="28px" viewBox="0 0 32 32" enable-background="new 0 0 32 32"
				><line fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="7" x2="25" y1="13" y2="13" /><line
					fill="none"
					stroke="white"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-miterlimit="10"
					stroke-width="2"
					x1="7"
					x2="25"
					y1="22"
					y2="22"
				/><line fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="7" x2="25" y1="4" y2="4" /></svg
			>
		</button>
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
			<a class="nav__item" href="/" on:click={closeNavbar}>Home</a>
			<a class="nav__item" href="/nendoroids" on:click={closeNavbar}>넨도로이드</a>
			<a class="nav__item" href="/series" on:click={closeNavbar}>시리즈</a>
			<a class="nav__item" href="/news" on:click={closeNavbar}>뉴스</a>
			{#if isLogin}
				<a class="nav__item" href="/mypage" on:click={closeNavbar}>마이페이지</a>
				<a class="nav__item" href="/logout" on:click={closeNavbar}>로그아웃</a>
			{/if}
		</nav>
	{/if}

	<div class="main" on:click={closeNavbar}>
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
		--color5: #eff5f5;
	}
	:global(body) {
		margin: 0px;
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
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
	.nav__item {
		flex-basis: 32px;
		line-height: 32px;
		color: black;
		font-size: 14px;
		text-decoration-line: none;
		padding-left: 12px;
		overflow: hidden;
	}
	.nav__item:hover {
		background-color: var(--color4);
	}
	.main {
		width: auto;
		margin-top: 40px;
		padding: 16px;
	}
</style>
