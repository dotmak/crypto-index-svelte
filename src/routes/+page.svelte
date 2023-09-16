<script>
	import Cryptotable from "../components/Cryptotable.svelte";

	let query = "";

	const handleInput = (event) => {
		query = event.currentTarget.value;
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>	
	<div class="main-section flex flex-col">

		<div class="input-container p-3 flex flex-col">
			<label for="coin" class="text-white">Search for coin</label>
			<input type="text" class="w-36 rounded-md" on:input={handleInput}>
		</div>
		<Cryptotable/>
	</div>


</section>