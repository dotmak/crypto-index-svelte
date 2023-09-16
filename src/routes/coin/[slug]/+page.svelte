<script>
	export let data;
</script>

<div class="coin-wrapper text-white">
  <div class="coin-container grid grid-cols-12 gap-4">
    <div class="first col-span-3">
      <div class="coin-data">
        <h2>Name: {data.cryptos.id}</h2>
        Rank: {data.cryptos.rank}
      </div>
    </div>
    <div class="second col-span-7">
      Data graphs coming soon
    </div>
    <div class="third col-span-2">
    3
    </div>
  </div>
</div>