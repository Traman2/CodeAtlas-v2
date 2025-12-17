import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';
import ArticleFeedback from "@/components/ArticleFeedback";

export const sections = [
    { id: "popular-frameworks", title: "Popular Frameworks" },
    { id: "essential-tools", title: "Essential Tools" },
    { id: "next-steps", title: "Next Steps" }
]

export const metadata: GuideMetadata = {
    id: 'webdev',
    title: 'Web Development',
    category: 'WELCOME',
    path: '/alldocs/welcome/webdev',
    keywords: ['web', 'react', 'vue', 'angular', 'frontend', 'frameworks', 'javascript', 'typescript', 'vite', 'webpack', 'tailwind', 'rest', 'graphql', 'jest', 'testing'],
    description: 'Comprehensive guides and resources for modern web development. From frontend frameworks to backend APIs, discover everything you need to build scalable web applications.',
    searchableContent: `
        Web Development
        Comprehensive guides and resources for modern web development. From frontend frameworks to backend APIs, discover everything you need to build scalable web applications.
        Popular Frameworks
        React
        A JavaScript library for building user interfaces. Learn about hooks, components, state management, and best practices for React development.
        Vue.js
        Progressive JavaScript framework for building web interfaces. Explore the composition API, reactive data, and Vue ecosystem tools.
        Angular
        Platform for building web applications with TypeScript. Discover dependency injection, modules, and the Angular CLI.
        Essential Tools
        Vite & Webpack for bundling and building
        TypeScript for type-safe development
        Tailwind CSS for utility-first styling
        REST APIs and GraphQL for data fetching
        Testing with Jest and React Testing Library
    `.trim()
};

export default function WebDevDocs() {
    const navigate = useNavigate();

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

            <h2 id="next-steps" className="text-2xl font-semibold mt-12 mb-4">
                Ready to Dive Deeper?
            </h2>

            <button
                onClick={() => navigate("/alldocs/webdev")}
                className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
            >
                <div className="flex items-center gap-4">
                    <Icon icon="teenyicons:react-outline" width="40" height="40" className="text-[#554DE2]" />
                    <div className="flex flex-col items-start">
                        <h3 className="font-semibold text-lg text-left">Explore Web Development Guides</h3>
                        <p className="text-[#6b7280] text-left">Deep dive into React, Vue, Angular, and modern web technologies</p>
                    </div>
                </div>
                <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="mt-4 mb-6 leading-relaxed">
                Now that you understand the basics of web development, explore our comprehensive Web Development
                section for in-depth guides, tutorials, and best practices across all the frameworks and tools
                mentioned above.
            </p>

            <ArticleFeedback articleId="/alldocs/welcome/webdev"/>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/welcome/howtouse")}
                    className="px-6 py-4  transition-all flex items-center justify-between group cursor-pointer"
                >
                    
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/welcome/mobile")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mynaui:mobile" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Devices - Mobile</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}
