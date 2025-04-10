import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header className="bg-white shadow-sm">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex space-x-8">
						<a 
							href="/" 
							className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 text-sm font-medium"
						>
							Home
						</a>
						<a 
							href="/404" 
							className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 text-sm font-medium"
						>
							404
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
}
