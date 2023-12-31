export async function load({ params }) {
  let cryptos;
  let res = await fetch(
    `https://api.coincap.io/v2/assets/${params.slug}/?bearer=3b51de28-9748-4366-ad23-1ced7213ec89`
  ).then((res) => res.json());

  return {
    cryptos: await res.data,
  };
}
