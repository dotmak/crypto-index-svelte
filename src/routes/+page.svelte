<script>
	import Cryptotable from "../components/Cryptotable.svelte";
</script>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Cryptoindex homepage" />
</svelte:head>

<section>	
	<div class="main-section flex flex-col">
		<div class="input-container p-3 flex flex-col">
			<label for="coin" class="text-white">Search for coin</label>
			<input type="text" class="w-36 rounded-md">
		</div>
		<Cryptotable/>
	</div>
</section>