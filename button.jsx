import React from 'react'

const Home = () => {
	return (
		<div className="container mx-auto flex flex-col justify-center items-center">
			<div className="flex items-center justify-center mt-10">
				<button
								type="button"
								className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
								aria-label="toggle menu"
							>
								<svg
									viewBox="0 0 24 24"
									className="w-6 h-6 fill-current"
								>
									<path
										fillRule="evenodd"
										d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
									></path>
								</svg>
				</button>
			</div>
		</div>
	)
}

export default Home