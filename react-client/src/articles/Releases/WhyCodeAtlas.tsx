import { Icon } from "@iconify/react";
import ArticleFeedback from '../../components/ArticleFeedback';

export const sections = [
    { id: "the-problem", title: "The Problem" },
    { id: "the-aha-moment", title: "The Aha Moment" },
    { id: "what-makes-different", title: "What Makes Code Atlas Different" },
]

export const metadata = {
    id: 'why-code-atlas',
    title: 'Why I Built Code Atlas',
    date: 'December 2, 2024',
    path: '/articles/why-code-atlas',
    description: 'The story behind Code Atlas and why I decided to build a better way to learn programming.',
};

export default function WhyCodeAtlas() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">RELEASE NOTE</p>

            <h1 className="text-3xl font-semibold mt-2 mb-2">
                Why I Built Code Atlas
            </h1>

            <p className="text-[#7b7f85] text-sm mb-6">
                {metadata.date}
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="streamline:ai-technology-spark" className="w-70 h-70 text-[#1d1884]" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Building Code Atlas wasn't just about creating another documentation site. It was born out of frustration,
                countless late nights, and the realization that learning modern web development shouldn't be this hard.
            </p>

            <h2 id="the-problem" className="text-2xl font-semibold mt-12 mb-4">
                The Problem: Drowning in Documentation
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                I still remember the night everything clicked for me. I was trying to set up React with TypeScript for
                the first time—something that should have been straightforward. But after reading through what felt like
                endless pages of documentation, jumping between the official React docs, TypeScript docs, Vite docs, and
                countless blog posts, I found myself more confused than when I started.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                The official documentation was <strong>comprehensive</strong>, sure. But it was also <strong>overwhelming</strong>.
                I didn't need to know every edge case or advanced feature right away—I just wanted to understand the basics
                and start building. I felt like I was trying to learn how to drive a car by reading the entire automotive
                engineering manual.
            </p>

            <div className="bg-[#f6f6f6] border-l-4 border-[#4f46ff] p-6 my-8">
                <div className="flex gap-3">
                    <Icon icon="material-symbols:lightbulb-outline" className="text-[#4f46ff] shrink-0" width="24" height="24" />
                    <div>
                        <p className="font-semibold mb-2">The Turning Point</p>
                        <p className="text-[#6b7280] leading-relaxed">
                            After spending three hours just trying to understand how to configure my build tool, I realized
                            the problem wasn't me—it was the way technical documentation is written. It assumes you either
                            know everything or nothing, with very little in between.
                        </p>
                    </div>
                </div>
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                But here's where it got even worse. Once I <em>finally</em> got my frontend working, I needed to connect it
                to a backend. I chose Express.js because everyone said it was "simple" and "beginner-friendly."
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                And you know what? Setting up Express itself <em>was</em> simple. The problem came when I tried to actually
                <strong> integrate it with my React frontend</strong>. Suddenly I was dealing with CORS errors I didn't
                understand, environment variables that weren't loading, and API calls that returned cryptic 500 errors.
                The Express docs explained how to build a server, but they didn't explain how to actually <em>use it</em>
                with a real frontend application.
            </p>

            <h2 id="the-aha-moment" className="text-2xl font-semibold mt-12 mb-4">
                The "Aha" Moment
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                I remember sitting there at 2 AM, frustrated and exhausted, thinking: <strong>"There has to be a better way."</strong>
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                I realized what I needed wasn't more documentation—it was <em>the right documentation</em>. I needed guides that:
            </p>

            <ul className="list-disc pl-6 mt-4 mb-6 space-y-2">
                <li className="leading-relaxed">
                    <strong>Got to the point quickly</strong> without assuming I had hours to read hundreds of pages
                </li>
                <li className="leading-relaxed">
                    <strong>Explained concepts in plain English</strong> instead of jargon-heavy technical speak
                </li>
                <li className="leading-relaxed">
                    <strong>Showed real-world integration examples</strong> instead of isolated "hello world" demos
                </li>
                <li className="leading-relaxed">
                    <strong>Addressed common mistakes</strong> so I wouldn't waste hours debugging issues that thousands
                    of developers before me had already faced
                </li>
            </ul>

            <p className="mt-4 mb-6 leading-relaxed">
                That's when the idea for Code Atlas was born. I wanted to create the documentation hub I wish I'd had when
                I was learning—a place where you could quickly understand the essentials of any technology and see how it
                fits into the bigger picture.
            </p>

            <h2 id="what-makes-different" className="text-2xl font-semibold mt-12 mb-4">
                What Makes Code Atlas Different
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Code Atlas isn't trying to replace official documentation. Instead, it's designed to be your <strong>friendly
                guide</strong> that helps you understand the fundamentals quickly, so you can start building sooner.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="bg-[#f6f6f6] p-6 border border-[#f0f0f0]">
                    <Icon icon="material-symbols:speed" className="text-[#4f46ff] mb-3" width="32" height="32" />
                    <h3 className="font-semibold text-lg mb-2">Quick to Learn</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                        Every guide is designed to get you up and running in minutes, not hours. We focus on what you
                        need to know right now.
                    </p>
                </div>

                <div className="bg-[#f6f6f6] p-6 border border-[#f0f0f0]">
                    <Icon icon="material-symbols:integration-instructions" className="text-[#4f46ff] mb-3" width="32" height="32" />
                    <h3 className="font-semibold text-lg mb-2">Real Integration Examples</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                        Learn how technologies work together, not in isolation. See how React connects to Express,
                        how to deploy to AWS, and more.
                    </p>
                </div>

                <div className="bg-[#f6f6f6] p-6 border border-[#f0f0f0]">
                    <Icon icon="material-symbols:psychology-alt" className="text-[#4f46ff] mb-3" width="32" height="32" />
                    <h3 className="font-semibold text-lg mb-2">Beginner-Friendly Language</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                        No jargon, no assumptions. We explain concepts like we're talking to a friend, not writing
                        an academic paper.
                    </p>
                </div>

                <div className="bg-[#f6f6f6] p-6 border border-[#f0f0f0]">
                    <Icon icon="material-symbols:warning-rounded" className="text-[#4f46ff] mb-3" width="32" height="32" />
                    <h3 className="font-semibold text-lg mb-2">Common Pitfalls Included</h3>
                    <p className="text-[#6b7280] leading-relaxed">
                        Learn from the mistakes others have made. We highlight common errors and show you how to
                        avoid them upfront.
                    </p>
                </div>
            </div>

            <div className="bg-[#eae9ff] border border-[#4f46ff] p-6 my-8">
                <p className="leading-relaxed text-[#1d1884]">
                    <strong>My goal is simple:</strong> I want Code Atlas to be the first place you go when you're
                    learning a new technology. Not because it has everything, but because it gives you exactly what
                    you need to get started with confidence.
                </p>
            </div>

            <p className="mt-8 mb-8 leading-relaxed">
                This is just the beginning. Code Atlas is a living project that will grow and improve based on what
                developers actually need. If there's a technology you'd like to see covered, or if you have feedback
                on how we can make the guides even better, I'd love to hear from you.
            </p>

            <p className="mt-4 mb-8 leading-relaxed text-[#6b7280]">
                Here's to making learning to code less frustrating and more fun. Let's build something amazing together.
            </p>

            <ArticleFeedback articleId="/articles/why-code-atlas"/>
        </>
    )
}
