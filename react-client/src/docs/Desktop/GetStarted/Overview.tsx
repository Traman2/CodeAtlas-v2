import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-desktop", title: "What is Desktop Development?" },
    { id: "approaches", title: "Desktop Development Approaches" },
    { id: "what-youll-learn", title: "What You'll Learn" },
    { id: "getting-started", title: "Getting Started" }
]

export const metadata: GuideMetadata = {
    id: 'desktop-overview',
    title: 'Desktop Development Overview',
    category: 'DESKTOP',
    path: '/alldocs/desktop/overview',
    keywords: ['desktop development', 'overview', 'electron', 'tauri', 'macos', 'windows', '.net'],
    description: 'Introduction to desktop development including cross-platform frameworks like Electron and native platforms like macOS and Windows.',
    searchableContent: `
        Desktop Development Overview
        Introduction to desktop app development
        Electron, Tauri, macOS, Windows, .NET, ASP.NET
    `.trim()
};

export default function DesktopOverview() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Desktop Development Overview
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Your guide to building desktop applications for Windows, macOS, and Linux
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:laptop" className="w-70 h-70 text-[#1d1884]"/>
            </div>

            <h2 id="what-is-desktop" className="text-2xl font-semibold mt-12 mb-4">
                What is Desktop Development?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Desktop development focuses on creating applications that run directly on operating systems like Windows, macOS, and Linux.
                Desktop apps have deep access to system capabilities, offline functionality, and can deliver powerful user experiences.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Modern desktop development offers cross-platform frameworks (Electron, Tauri) and native approaches (Swift for macOS, .NET for Windows).
                Choosing the right approach depends on your team's expertise, performance needs, and distribution targets.
            </p>

            <h2 id="approaches" className="text-2xl font-semibold mt-12 mb-4">
                Desktop Development Approaches
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                There are three primary approaches to desktop development:
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/desktop/electron")}
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:electron-framework" width="40" height="40" className="text-[#47848F] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Cross-Platform (Web Tech)</h3>
                        <p className="text-[#7b7f85] text-left">
                            Frameworks like Electron and Tauri let you build desktop apps using web technologies (HTML, CSS, JavaScript)
                            and deploy to multiple operating systems.
                        </p>
                    </div>
                </button>

                <button
                    onClick={() => navigate("/alldocs/desktop/macos")}
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:apple" width="40" height="40" className="text-[#000000] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Native macOS (Swift, AppKit)</h3>
                        <p className="text-[#7b7f85] text-left">
                            Build macOS apps using Swift, SwiftUI, or AppKit for the best performance and access to macOS features.
                        </p>
                    </div>
                </button>

                <button
                    onClick={() => navigate("/alldocs/desktop/dotnet")}
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:microsoft" width="40" height="40" className="text-[#0078D4] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Native Windows (.NET, WinUI)</h3>
                        <p className="text-[#7b7f85] text-left">
                            Build Windows desktop apps using .NET (WPF, WinUI, MAUI) for deep integration with the Windows ecosystem.
                        </p>
                    </div>
                </button>
            </div>

            <h2 id="what-youll-learn" className="text-2xl font-semibold mt-12 mb-4">
                What You'll Learn
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                This desktop section covers everything from cross-platform frameworks to native development:
            </p>

            <div className="space-y-6 mt-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Cross-Platform Frameworks</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Learn how to use Electron and Tauri to build cross-platform apps with web technologies.
                            Understand the trade-offs between performance and developer experience.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Native Development</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Explore native macOS development (SwiftUI/AppKit) and native Windows development (.NET, WinUI, WPF).
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Microsoft Stack (.NET & ASP.NET)</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Build Windows desktop apps with .NET and connect them to ASP.NET web services and APIs.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Here's a recommended learning path:
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-6">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Recommended Path</h3>
                        <ol className="space-y-2 text-[#4B5563]">
                            <li><strong>1. Compare Frameworks:</strong> Review the comparison guide to understand Electron vs Tauri vs native approaches.</li>
                            <li><strong>2. Choose Your Stack:</strong> Decide between cross-platform (Electron/Tauri) or native (macOS/Windows).</li>
                            <li><strong>3. Set Up Tools:</strong> Install the necessary tooling (Node.js + VS Code, Xcode, or Visual Studio).</li>
                            <li><strong>4. Build a Starter App:</strong> Follow the getting started guide for the framework you chose.</li>
                            <li><strong>5. Connect to Backend:</strong> Learn ASP.NET for building APIs that desktop apps can consume.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/desktop/comparison")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:chart-bar" width="32" height="32" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Framework Comparison</h3>
                            <p className="text-[#6b7280] text-sm text-left">Compare Electron, Tauri, .NET, and native</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={() => navigate("/alldocs/desktop/electron")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:electron-framework" width="32" height="32" className="text-[#47848F]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Start with Electron</h3>
                            <p className="text-[#6b7280] text-sm text-left">Build cross-platform apps with web tech</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <p className="mt-8 mb-8 leading-relaxed text-[#6b7280]">
                Whether you're building productivity tools, enterprise software, or developer utilities, desktop apps
                provide powerful capabilities. Choose the approach that matches your team's strengths and your users'
                needs. Happy building! 🖥️
            </p>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/desktop/comparison")}
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

