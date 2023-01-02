<script>
	let isLogin = false;
</script>

{#if isLogin === false}
	<div class="container">
		<h2>로그인</h2>
		<form class="">
			<div class="">
				<label class="form-label" for="email">이메일</label>
				<input class="form-control" type="email" id="email" placeholder="이메일을 입력해주세요" />
			</div>
			<div class="">
				<label class="form-label" for="password">비밀번호</label>
				<input class="form-control" type="password" id="password" placeholder="비밀번호를 입력해주세요" />
			</div>
			<div class="">
				<button class="btn btn-light" type="submit">로그인</button>
			</div>
		</form>
	</div>
{/if}
