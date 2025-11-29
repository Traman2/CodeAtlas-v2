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
                Welcome to Code Atlas!
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Your ultimate guide to learning the most popular frameworks and technologies
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="streamline-pixel:computer-old-electronics-bug" className="w-70 h-70 text-[#1d1884]"/>
            </div>
            

            <p className="mt-4 mb-4 leading-relaxed">
                Ever feel overwhelmed trying to learn a new technology? You're not alone! Official documentation
                can be hundreds of pages long, scattered across multiple sites, and sometimes written in a way
                that assumes you already know what you're doing. That's frustrating, especially when you just
                want to get started and build something cool.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                <strong>Code Atlas is here to change that.</strong> Think of us as your friendly guide who cuts through
                the noise and shows you exactly what you need to know to get started with the most common frameworks
                and technologies. No fluff, no overwhelming walls of text—just clear, practical explanations that help
                you understand the basics and start building.
            </p>



            <h2 id="what-you-find" className="text-2xl font-semibold mt-12 mb-4">
                What You'll Learn Here
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                We've organized everything into easy-to-navigate categories. Whether you want to build websites,
                mobile apps, set up servers, or deploy your projects to the cloud—we've got you covered.
                Click on any category below to explore the basics!
            </p>

            <div className="grid grid-cols-2 gap-4">
                <button onClick={() => navigate("/alldocs/welcome/webdev")} className="px-6 py-2 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all">
                    <Icon icon="teenyicons:react-outline" width="34" height="34" className="text-[#4f46ff]" />
                    <div className="flex flex-col ">
                        <h2 className="font-semibold text-lg text-left">Web Development</h2>
                        <p className="text-[#7b7f85] text-left">Learn React, Vue, Svelte, and how to build modern websites</p>
                    </div>
                </button>

                <button onClick={() => navigate("/alldocs/welcome/mobile")} className="px-6 py-2 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all">
                    <Icon icon="mdi:cellphone" width="34" height="34" className="text-[#4f46ff]" />
                    <div className="flex flex-col ">
                        <h2 className="font-semibold text-lg text-left">Mobile Apps</h2>
                        <p className="text-[#7b7f85] text-left">Get started with React Native, Flutter, and iOS/Android development</p>
                    </div>
                </button>

                <button onClick={() => navigate("/alldocs/welcome/backend")} className="px-6 py-2 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all">
                    <Icon icon="akar-icons:node-fill" width="34" height="34" className="text-[#4f46ff]" />
                    <div className="flex flex-col ">
                        <h2 className="font-semibold text-lg text-left">Backend & Databases</h2>
                        <p className="text-[#7b7f85] text-left">Build servers with Node.js, Python, and work with databases</p>
                    </div>
                </button>

                <button onClick={() => navigate("/alldocs/welcome/cloud")} className="px-6 py-2 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all">
                    <Icon icon="lineicons:aws" width="34" height="34" className="text-[#4f46ff]" />
                    <div className="flex flex-col ">
                        <h2 className="font-semibold text-lg text-left">Cloud & Deployment</h2>
                        <p className="text-[#7b7f85] text-left">Deploy your apps to AWS, Vercel, Netlify, and other platforms</p>
                    </div>
                </button>
            </div>

            <p className="mt-6 mb-8 leading-relaxed">
                Every guide is designed to teach you the <strong>fundamentals first</strong>, so you understand how things work
                before diving into advanced topics. We include real code examples you can copy and try yourself, explanations
                of common mistakes beginners make (so you can avoid them!), and tips on best practices used by professional developers.
            </p>

            <h2 id="how-to-navigate" className="text-2xl font-semibold mt-12 mb-4">
                How to Get Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Not sure where to begin? No worries! Here's how to make the most of Code Atlas and find exactly what you need:
            </p>

            <div className="space-y-6 mt-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Pick a Topic That Interests You</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Want to build a website? Check out Web Development. Curious about mobile apps? Head to the Mobile section.
                            Don't overthink it—just pick something that sounds fun and start exploring! The sidebar on the left has
                            all our categories.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Search When You Know What You Want</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Press the <kbd className="px-2 py-1 bg-gray-200 rounded border border-gray-300 font-mono text-sm">/</kbd> key
                            anywhere on the site to open search, or click the search bar at the top. Type things like "React basics" or
                            "deploy to Vercel" and we'll show you the relevant guides instantly.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Read Through at Your Own Pace</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Each guide is broken into sections—you can read everything from top to bottom, or jump to specific parts
                            using the "On this page" menu on the right. Learn at whatever speed feels comfortable for you. There's no rush!
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Try It Out Yourself</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            The best way to learn is by doing! Copy the code examples, run them on your computer, and experiment.
                            Break things, fix them, and see what happens. That's how you'll really understand how everything works.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        5
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Check Out the Bonus Tools</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            We've built some helpful tools to make your life easier! The{" "}
                            <a onClick={() => navigate("/apifinder")} className="font-bold text-[#4f46ff] underline hover:decoration-2 cursor-pointer">API Finder</a>
                            {" "}helps you discover useful APIs for your projects, and the{" "}
                            <a onClick={() => navigate("/planningagent")} className="font-bold text-[#4f46ff] underline hover:decoration-2 cursor-pointer">Planning Agent</a>
                            {" "}can suggest complete tech stacks based on what you want to build.
                        </p>
                    </div>
                </div>
            </div>

            <p className="mt-8 mb-8 leading-relaxed text-[#6b7280]">
                Remember: Everyone starts somewhere, and learning to code is a journey, not a race. Take your time,
                don't be afraid to ask questions, and celebrate the small wins along the way. You've got this! 🚀
            </p>
        </>
    )
}