<script>
  import Chart from "../../../components/Chart.svelte";
  export let data;
</script>

<div class="coin-wrapper text-white">
  <div class="coin-container grid grid-cols-12 gap-4">
    <div class="first col-span-3">
      <div class="coin-data">
        Rank: {data.cryptos.rank}
        <div class="name flex flex-row gap-2 text-[18px]">
          <h2>{data.cryptos.name}</h2>
          <h3>{data.cryptos.symbol}</h3>
        </div>
        <div class="price flex flex-row gap-2 items-center my-4">
          <h3 class="text-[22px]">
            ${Math.round(data.cryptos.priceUsd).toFixed(2)}
          </h3>
          <h3
            class={"" +
              (crypto.changePercent24Hr > 0
                ? "text-green-600"
                : "text-red-600")}
          >
            {Number(data.cryptos.changePercent24Hr).toFixed(2)}%
          </h3>
        </div>
        <h4 class="my-2">
          Supply: {Math.round(data.cryptos.supply).toFixed(2)}
        </h4>
        <h4 class="my-2">
          Max supply: {Math.round(data.cryptos.supply).toFixed(2)}
        </h4>
        <h4 class="my-2">
          Market Cap: {Math.round(data.cryptos.marketCapUsd).toFixed(2)}
        </h4>
        <h4 class="my-2">
          24hr Volume: {Math.round(data.cryptos.supply).toFixed(2)}
        </h4>
      </div>
    </div>
    <div class="second col-span-7">
      Data graphs coming soon
      <Chart />
    </div>
    <div class="third col-span-2">News</div>
  </div>
</div>
