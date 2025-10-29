export const sections = [
    { id: "popular-frameworks", title: "Popular Frameworks" },
    { id: "essential-tools", title: "Essential Tools" }
]

export default function WebDevDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">DEVICES</p>
            <h1 className="text-3xl font-semibold mt-2">Web Development</h1>
            <p className="mt-2">
                Comprehensive guides and resources for modern web development. From frontend
                frameworks to backend APIs, discover everything you need to build scalable
                web applications.
            </p>

            <h2 id="popular-frameworks" className="text-2xl font-semibold mt-8 mb-4">Popular Frameworks</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">React</h3>
                    <p className="mt-2 text-gray-700">
                        A JavaScript library for building user interfaces. Learn about hooks,
                        components, state management, and best practices for React development.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Vue.js</h3>
                    <p className="mt-2 text-gray-700">
                        Progressive JavaScript framework for building web interfaces. Explore
                        the composition API, reactive data, and Vue ecosystem tools.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Angular</h3>
                    <p className="mt-2 text-gray-700">
                        Platform for building web applications with TypeScript. Discover
                        dependency injection, modules, and the Angular CLI.
                    </p>
                </div>
            </div>

            <h2 id="essential-tools" className="text-2xl font-semibold mt-8 mb-4">Essential Tools</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>Vite & Webpack for bundling and building</li>
                <li>TypeScript for type-safe development</li>
                <li>Tailwind CSS for utility-first styling</li>
                <li>REST APIs and GraphQL for data fetching</li>
                <li>Testing with Jest and React Testing Library</li>
            </ul>
        </>
    )
}
