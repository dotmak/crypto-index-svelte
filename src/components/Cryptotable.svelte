<script>
  import { onMount } from "svelte";

  let cryptos = [];

  onMount(async () => {
    let res = await fetch(
      "https://api.coincap.io/v2/assets?bearer=3b51de28-9748-4366-ad23-1ced7213ec89"
    ).then((res) => res.json());

    cryptos = await res.data;
  });
</script>

<div class="crypto-table bg-[#372F46] rounded-[20px] p-4">
  <table class="table-auto text-center w-full">
    <thead class="border-t-[1px] border-b-[1px] border-black">
      <tr>
        <th class="p-3">#</th>
        <th class="p-3">Symbol</th>
        <th class="p-3">Name</th>
        <th class="p-3">Price</th>
        <th class="p-3">24hr %</th>
        <th class="p-3">Market Cap</th>
        <th class="p-3">Max Supply</th>
        <th class="p-3">Circulating Supply</th>
      </tr>
    </thead>
    <tbody>
      {#each cryptos as crypto, i}
        <tr key={crypto.rank}>
          <td class="p-3">{crypto.rank}</td>
          <td>{crypto.symbol}</td>
          <td><a href="/coin/{crypto.symbol}" data={cryptos}>{crypto.name}</a></td>
          <td>{(Math.round(crypto.priceUsd * 100) / 100).toFixed(2)}$</td>
          <td
            class={"p-3 " +
              (crypto.changePercent24Hr > 0
                ? "text-green-600"
                : "text-red-600")}
          >
            {(Math.round(crypto.changePercent24Hr * 100) / 100).toFixed(2)}%
          </td>
          <td class="p-3">
            {(Math.round(crypto.marketCapUsd * 100) / 100).toFixed(2)}
          </td>
          <td class="p-3">
            {(Math.round(crypto.supply * 100) / 100).toFixed(2)}
          </td>
          <td class="p-3">{crypto.maxSupply}</td>
        </tr>
      {:else}
        <!-- this block renders when cryptos.length === 0 -->
        <p>Loading data</p>
      {/each}
    </tbody>
  </table>
</div>
