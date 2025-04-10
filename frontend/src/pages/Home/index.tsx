import { useState, useEffect } from 'preact/hooks';
import { Counter } from '../../components/Counter';

export function Home() {
	const [message, setMessage] = useState('Loading...');

	useEffect(() => {
		fetch('/api/hello')
			.then(res => {
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				return res.json();
			})
			.then(data => setMessage(data.message || 'No message received'))
			.catch(err => {
				console.error("Error fetching data:", err);
				setMessage('Failed to load message from middleware.');
			});
	}, []);

	return (
		<div class="home">
			<h1 className="text-2xl font-bold mb-4 mt-6">An Starter PWA for a BigCommerce Headless Storefront</h1>
			<p className="text-lg text-blue-600 my-4">Message from Middleware: <strong>{message}</strong></p>
			<div className="my-8">
				<h2 className="text-lg font-semibold mb-2">Counter Demo using Zustand</h2>
				<p className="text-gray-600 mb-4">This counter component demonstrates global state management with Zustand.</p>
				<Counter />
			</div>
			<section className="flex flex-wrap gap-4">
				<Resource
					title="BigCommerce Dev Center"
					description="The open source docs home for BigCommerce, including API specifications."
					href="https://developer.bigcommerce.com/"
				/>
				<Resource
					title="BigCommerce Help Center"
					description="The Help Center is where you will find how-to docs, reference materials, getting started guides, and videos all related to helping you set up and run your store."
					href="https://support.bigcommerce.com/s/?language=en_US"
				/>
				<Resource
					title="Catalyst"
					description="Catalyst is the composable, fully customizable headless commerce framework for BigCommerce. Catalyst is built with Next.js, uses our React storefront components, and is backed by the GraphQL Storefront API."
					href="https://www.catalyst.dev/"
				/>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource flex-1 min-w-[300px] p-6">
			<h2 class="text-xl font-bold mb-2">{props.title}</h2>
			<p class="text-gray-600">{props.description}</p>
		</a>
	);
}
