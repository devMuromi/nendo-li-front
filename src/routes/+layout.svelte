<script>
	let header = 'Nendoroid';
</script>

<div class="root">
	<nav class="nav">
		<a class="nav__item" href="/">Home</a>
		<a class="nav__item" href="/nendoroids">Nendoroids</a>
		<a class="nav__item" href="/nendoroids">testestsetsetstNs</a>
		<a class="nav__item" href="/my">My Page</a>
		<a class="nav__item" href="/settings">Settings</a>
	</nav>
	<div class="header">{header}</div>
	<div class="main">
		<slot />
	</div>
</div>

<style>
	.root {
		width: 100%;
	}
	:global(body) {
		margin: 0px;
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
	}
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		width: 80px;
		height: 100%;
		margin-top: 60px;

		background-color: whitesmoke;
	}
	.nav__item:hover {
		background-color: gainsboro;
	}
	.nav__item {
		flex-basis: 80px;
		line-height: 80px;

		text-align: center;
		border: 1px solid #ddd;
		font-weight: 600;
		color: black;
		font-size: 0.875rem; /* 14px */
		text-decoration-line: none;

		overflow: hidden;
	}
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 60px;
		line-height: 60px;
		padding-left: 10px;
		font-size: 24px;
		background-color: tomato;
	}
	.main {
		width: auto;
		margin-left: 80px;
		margin-top: 60px;
		padding: 10px 0 0 10px;
	}
</style>
