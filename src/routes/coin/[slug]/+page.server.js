import { posts } from '../../../lib/data/data';

export async function load({ params }) {
	let cryptos;

	try {
		let res = await fetch(
			`https://api.coincap.io/v2/assets/${params.slug}/?bearer=3b51de28-9748-4366-ad23-1ced7213ec89`
		).then((res) => res.json());
		cryptos = await res.data;

		console.log(cryptos)

	} catch (error) {
		console.log(error)
	}

	// const post = cryptos.find((post) => post.slug === params.slug);


	return {
		cryptos
	};
}