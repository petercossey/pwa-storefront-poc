export function Home() {
	return (
		<div class="home">
			<h1 className="text-2xl font-bold mb-4 mt-6">An Starter PWA for a BigCommerce Headless Storefront</h1>
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
