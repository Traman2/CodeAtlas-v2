import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';
import ArticleFeedback from "@/components/ArticleFeedback";

export const sections = [
    { id: "what-is-webdev", title: "What is Web Development?" },
    { id: "frameworks-overview", title: "Popular Frameworks" },
    { id: "what-youll-learn", title: "What You'll Learn" },
    { id: "getting-started", title: "Getting Started" }
]

export const metadata: GuideMetadata = {
    id: 'webdev-overview',
    title: 'Web Development Overview',
    category: 'WEBDEV',
    path: '/alldocs/webdev/overview',
    keywords: ['web development', 'overview', 'introduction', 'frontend', 'frameworks', 'react', 'vue', 'angular', 'getting started'],
    description: 'Introduction to web development and overview of popular frameworks like React, Vue, and Angular.',
    searchableContent: `
        Web Development Overview
        Introduction to modern web development frameworks and technologies
        What is Web Development?
        Web development is the process of building websites and web applications that run in browsers
        Popular Frameworks
        React, Vue, Angular, Svelte, Next.js
        What You'll Learn
        How to get started with each framework, unique features, and best practices
    `.trim()
};

export default function WebDevOverview() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Web Development Overview
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Your comprehensive guide to modern web development frameworks and technologies
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="teenyicons:react-outline" className="w-70 h-70 text-[#1d1884]"/>
            </div>

            <h2 id="what-is-webdev" className="text-2xl font-semibold mt-12 mb-4">
                What is Web Development?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Web development is the process of building websites and web applications that run in web browsers.
                Modern web development has evolved far beyond simple HTML pages—today's web applications are powerful,
                interactive, and can rival native desktop applications in functionality and user experience.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                The landscape of web development is dominated by JavaScript frameworks and libraries that help developers
                build complex, maintainable applications efficiently. These tools abstract away much of the complexity
                of managing state, handling user interactions, and updating the user interface.
            </p>

            <h2 id="frameworks-overview" className="text-2xl font-semibold mt-12 mb-4">
                Popular Frameworks
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                In this documentation, we'll cover the most popular and widely-used web development frameworks. Each has
                its own philosophy, strengths, and use cases:
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
                <button 
                    onClick={() => navigate("/alldocs/webdev/react")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:react" width="40" height="40" className="text-[#61DAFB] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">React</h3>
                        <p className="text-[#7b7f85] text-left">
                            A JavaScript library for building user interfaces. Created by Facebook, React uses a component-based
                            architecture and a virtual DOM for efficient rendering.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/webdev/vue")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:vuejs" width="40" height="40" className="text-[#4FC08D] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Vue.js</h3>
                        <p className="text-[#7b7f85] text-left">
                            A progressive JavaScript framework for building user interfaces. Vue is known for its gentle
                            learning curve and excellent documentation.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/webdev/angular")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:angular" width="40" height="40" className="text-[#DD0031] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Angular</h3>
                        <p className="text-[#7b7f85] text-left">
                            A platform and framework for building single-page client applications using HTML and TypeScript.
                            Developed by Google, Angular provides a complete solution with built-in tools.
                        </p>
                    </div>
                </button>
            </div>

            <h2 id="what-youll-learn" className="text-2xl font-semibold mt-12 mb-4">
                What You'll Learn
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Throughout this documentation, you'll find comprehensive guides for each framework covering:
            </p>

            <div className="space-y-6 mt-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Getting Started</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Step-by-step instructions on how to set up your development environment, install the framework,
                            and create your first project. We'll walk you through the initial setup and configuration.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Unique Features</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Deep dives into what makes each framework special. Learn about React's hooks and virtual DOM,
                            Vue's reactivity system, Angular's dependency injection, and more.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Best Practices</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Industry-standard patterns and practices used by professional developers. Learn how to structure
                            your code, manage state, handle routing, and optimize performance.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Code Examples</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Real-world code examples you can copy and use in your projects. Each example is explained
                            in detail to help you understand not just what the code does, but why it's written that way.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Ready to dive in? Here's how to make the most of this documentation:
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-6">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Recommended Learning Path</h3>
                        <ol className="space-y-2 text-[#4B5563]">
                            <li className="leading-relaxed">
                                <strong>1. Start with the Comparison:</strong> Check out the framework comparison to understand
                                the differences between React, Vue, and Angular. This will help you choose which framework
                                to learn first.
                            </li>
                            <li className="leading-relaxed">
                                <strong>2. Pick a Framework:</strong> Choose one framework to start with. We recommend React
                                for beginners due to its large community and job market, but all three are excellent choices.
                            </li>
                            <li className="leading-relaxed">
                                <strong>3. Follow the Getting Started Guide:</strong> Work through the getting started guide
                                for your chosen framework. Don't just read—actually create the project and run the code!
                            </li>
                            <li className="leading-relaxed">
                                <strong>4. Explore Unique Features:</strong> Once you're comfortable with the basics, dive
                                into the unique features section to understand what makes your framework special.
                            </li>
                            <li className="leading-relaxed">
                                <strong>5. Build Something:</strong> The best way to learn is by building. Create a small
                                project using what you've learned, then iterate and improve it.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/webdev/comparison")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:chart-bar" width="32" height="32" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Framework Comparison</h3>
                            <p className="text-[#6b7280] text-sm text-left">Compare React, Vue, and Angular</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={() => navigate("/alldocs/webdev/react")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:react" width="32" height="32" className="text-[#61DAFB]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Start with React</h3>
                            <p className="text-[#6b7280] text-sm text-left">Learn the most popular framework</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <p className="mt-8 mb-8 leading-relaxed text-[#6b7280]">
                Remember: There's no "best" framework—each has its strengths. The best framework is the one that helps
                you build what you need efficiently. Start with one, master it, and then explore others to expand your
                toolkit. Happy coding! 🚀
            </p>

            <div className="mt-36"/>
            <ArticleFeedback articleId="/alldocs/webdev/overview"/>

            <div className="gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/webdev/comparison")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:chart-bar" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Framework Comparison</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

