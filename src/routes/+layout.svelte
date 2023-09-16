<script>
	import Header from '../components/Header.svelte';
  import "../app.css";
</script>

<div class="app">
	<div class="app-wrapper bg-[#08060B]  min-h-screen">
		<div class="container max-w-[1600px] mx-auto">
			<Header />

			<main>
				<div class="main-wrapper">
					<slot />
				</div>
			</main>
		
			<footer>
			</footer>
		</div>
	</div>
</div>

