import { useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-you-find", title: "What You'll Find" },
    { id: "how-to-navigate", title: "How to Navigate" },
]

export const metadata: GuideMetadata = {
    id: 'welcome-overview',
    title: 'What is Code Atlas?',
    category: 'WELCOME',
    path: '/alldocs/welcome/overview',
    keywords: ['getting started', 'overview', 'introduction', 'code atlas', 'what is', 'navigate', 'search'],
    description: 'Introduction to Code Atlas and how to navigate the documentation hub for developers.',
    searchableContent: `
        What is Code Atlas?
        The only docs you need to get started with full stack
        Code Atlas is your comprehensive documentation hub designed specifically for developers who want quick access to essential programming concepts without getting lost in overwhelming documentation. Whether you're just starting your software engineering journey or need a quick reference for specific topics, Code Atlas provides curated, concise guides that get you up to speed fast.
        What You'll Find in Code Atlas
        Code Atlas is organized into clear categories covering the full spectrum of software development topics.
        Web Concepts Basic guides to React, Svelte, Vue and more
        Backend Implementation guides to Node, Express, Django and more
        Hosting guides to AWS, Azure, Vercel and more
        Design Principals guides to UI/UX and accessibility
        Each category contains carefully curated guides that focus on practical application while ensuring you understand the underlying concepts. Code examples, common pitfalls, and real-world use cases are included throughout.
        How to Navigate Code Atlas
        Code Atlas is designed to help you find exactly what you need, whether you're exploring new technologies or diving deep into specific topics.
        Search for Guides Instantly
        Use the search bar at the top to quickly find specific guides, technologies, or concepts. Get instant results as you type.
        Browse a Huge Catalog of Common Technologies
        Explore our extensive collection of guides covering frontend frameworks, backend technologies, databases, hosting platforms, and more through the sidebar navigation.
        Find Relevant Docs from the Current Guide
        Each guide builds progressively on previous concepts, allowing you to follow a structured learning path. While you can skip ahead if needed, following the sequence ensures a solid foundation.
        Explore Additional Tools
        Take advantage of specialized features like the API Finder to discover common APIs for your projects, and the Planning Agent to generate complete tech stack plans based on your requirements.
    `.trim()
};

export default function DocsOverview() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                What is Code Atlas?
            </h1>

            <p className="mt-4 mb-6 leading-relaxed">
                The only docs you need to get started with full stack
            </p>

            <p className="mt-4 mb-4 leading-relaxed">
                Code Atlas is your comprehensive documentation hub designed specifically for developers
                who want quick access to essential programming concepts without getting lost in
                overwhelming documentation. Whether you're just starting your software engineering
                journey or need a quick reference for specific topics, Code Atlas provides curated,
                concise guides that get you up to speed fast.
            </p>



            <h2 id="what-you-find" className="text-2xl font-semibold mt-12 mb-4">
                What You'll Find in Code Atlas
            </h2>

            <p className="mt-4 mb-4 leading-relaxed">
                Code Atlas is organized into clear categories covering the full spectrum of software
                development topics. Here are the most common topics to get started. 
            </p>

            <div className="grid grid-cols-2 gap-4">
                <button onClick={() => navigate("/alldocs/welcome/webdev")} className="px-6 py-2 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all">
                    <Icon icon="teenyicons:react-outline" width="34" height="34" className="text-[#4f46ff]" />
                    <div className="flex flex-col ">
                        <h2 className="font-semibold text-lg text-left">Web Concepts</h2>
                        <p className="text-[#7b7f85] text-left">Basic guides to React, Svelte, Vue and more</p>
                    </div>

                </button>
                <button onClick={() => navigate("/alldocs/welcome/webdev")} className="px-6 py-2 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all">
                    <Icon icon="akar-icons:node-fill" width="34" height="34" className="text-[#4f46ff]" />
                    <div className="flex flex-col ">
                        <h2 className="font-semibold text-lg text-left">Backend Implementation</h2>
                        <p className="text-[#7b7f85] text-left">Basic guides to React, Svelte, Vue and more</p>
                    </div>
                </button>
                <button onClick={() => navigate("/alldocs/welcome/webdev")} className="px-6 py-2 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all">
                    <Icon icon="lineicons:aws" width="34" height="34" className="text-[#4f46ff]" />
                    <div className="flex flex-col ">
                        <h2 className="font-semibold text-lg text-left">Hosting</h2>
                        <p className="text-[#7b7f85] text-left">Basic guides to React, Svelte, Vue and more</p>
                    </div>
                </button>
                <button onClick={() => navigate("/alldocs/welcome/webdev")} className="px-6 py-2 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all">
                    <Icon icon="clarity:design-line" width="34" height="34" className="text-[#4f46ff]" />
                    <div className="flex flex-col ">
                        <h2 className="font-semibold text-lg text-left">Design Principals</h2>
                        <p className="text-[#7b7f85] text-left">Basic guides to React, Svelte, Vue and more</p>
                    </div>
                </button>
            </div>


            <p className="mt-4 mb-8 leading-relaxed">
                Each category contains carefully curated guides that focus on practical application
                while ensuring you understand the underlying concepts. Code examples, common pitfalls,
                and real-world use cases are included throughout.
            </p>

            <h2 id="how-to-navigate" className="text-2xl font-semibold mt-12 mb-4">
                How to Navigate Code Atlas
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Code Atlas is designed to help you find exactly what you need, whether you're exploring new technologies or diving deep into specific topics.
            </p>

            <div className="space-y-6 mt-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Search for Guides Instantly</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use the search bar at the top to quickly find specific guides, technologies, or concepts. Get instant results as you type.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Browse a Huge Catalog of Common Technologies</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Explore our extensive collection of guides covering frontend frameworks, backend technologies, databases, hosting platforms, and more through the sidebar navigation.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Find Relevant Docs from the Current Guide</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Each guide builds progressively on previous concepts, allowing you to follow a structured learning path. While you can skip ahead if needed, following the sequence ensures a solid foundation.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Explore Additional Tools</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Take advantage of specialized features like the <a onClick={() => navigate("/PlanningAgent")} className="font-bold text-[#4f46ff] underline hover:decoration-2 cursor-pointer">API Finder</a> to discover common APIs for your projects, and the <a onClick={() => navigate("/APIFinder")} className="font-bold text-[#4f46ff] underline hover:decoration-2 cursor-pointer">Planning Agent</a> to generate complete tech stack plans based on your requirements.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}