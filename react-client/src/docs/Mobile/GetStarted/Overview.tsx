import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-mobile", title: "What is Mobile Development?" },
    { id: "approaches", title: "Development Approaches" },
    { id: "what-youll-learn", title: "What You'll Learn" },
    { id: "getting-started", title: "Getting Started" }
]

export const metadata: GuideMetadata = {
    id: 'mobile-overview',
    title: 'Mobile Development Overview',
    category: 'MOBILE',
    path: '/alldocs/mobile/overview',
    keywords: ['mobile development', 'overview', 'introduction', 'ios', 'android', 'react native', 'flutter', 'expo'],
    description: 'Introduction to mobile development and overview of cross-platform and native development approaches.',
    searchableContent: `
        Mobile Development Overview
        Introduction to mobile app development
        Cross-platform and native development
        React Native, Flutter, Expo, Swift, Kotlin
    `.trim()
};

export default function MobileOverview() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Mobile Development Overview
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Your comprehensive guide to building mobile applications for iOS and Android
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:cellphone" className="w-70 h-70 text-[#1d1884]"/>
            </div>

            <h2 id="what-is-mobile" className="text-2xl font-semibold mt-12 mb-4">
                What is Mobile Development?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Mobile development is the process of creating applications that run on mobile devices like smartphones
                and tablets. With billions of mobile devices in use worldwide, mobile apps have become essential for
                businesses and developers alike.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Mobile development can be approached in two main ways: <strong>native development</strong> (platform-specific)
                and <strong>cross-platform development</strong> (one codebase for multiple platforms). Each approach has
                its advantages, and the best choice depends on your project requirements, team expertise, and goals.
            </p>

            <h2 id="approaches" className="text-2xl font-semibold mt-12 mb-4">
                Development Approaches
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                There are several ways to build mobile applications. Here are the main approaches:
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
                <button 
                    onClick={() => navigate("/alldocs/mobile/react-native")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:react" width="40" height="40" className="text-[#61DAFB] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Cross-Platform Frameworks</h3>
                        <p className="text-[#7b7f85] text-left">
                            Build apps for both iOS and Android with a single codebase. React Native, Flutter, and Expo
                            allow you to write once and deploy everywhere.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/mobile/kotlin")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:language-kotlin" width="40" height="40" className="text-[#7F52FF] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Native Development</h3>
                        <p className="text-[#7b7f85] text-left">
                            Build platform-specific apps using native languages. Kotlin for Android and Swift for iOS
                            provide the best performance and access to platform features.
                        </p>
                    </div>
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:react" width="32" height="32" className="text-[#61DAFB]" />
                        <h3 className="font-semibold">React Native</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        JavaScript-based framework for building native mobile apps. Share code with web React apps.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:language-dart" width="32" height="32" className="text-[#0175C2]" />
                        <h3 className="font-semibold">Flutter</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        Google's UI toolkit for building natively compiled apps. Uses Dart language and provides excellent performance.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:rocket-launch" width="32" height="32" className="text-[#000020]" />
                        <h3 className="font-semibold">Expo</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        Framework and platform for React Native. Simplifies development with managed workflow and OTA updates.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:language-swift" width="32" height="32" className="text-[#FA7343]" />
                        <h3 className="font-semibold">Swift & SwiftUI</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        Apple's modern language and UI framework for iOS development. Declarative UI with SwiftUI.
                    </p>
                </div>
            </div>

            <h2 id="what-youll-learn" className="text-2xl font-semibold mt-12 mb-4">
                What You'll Learn
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Throughout this documentation, you'll find comprehensive guides covering:
            </p>

            <div className="space-y-6 mt-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Cross-Platform Frameworks</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Learn React Native, Flutter, and Expo. Understand how to build apps that work on both
                            iOS and Android with a single codebase, and when to use each framework.
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
                            Master native development with Kotlin for Android and Swift for iOS. Learn platform-specific
                            features, UI frameworks (Jetpack Compose, SwiftUI), and best practices.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Development Tools</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Explore essential tools like Android Studio, Xcode, debugging tools, testing frameworks,
                            and deployment processes for app stores.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Best Practices</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Learn mobile-specific patterns, performance optimization, state management, navigation,
                            and how to handle platform differences effectively.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Ready to start building mobile apps? Here's a recommended learning path:
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-6">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Recommended Learning Path</h3>
                        <ol className="space-y-2 text-[#4B5563]">
                            <li className="leading-relaxed">
                                <strong>1. Start with the Comparison:</strong> Check out the framework comparison to understand
                                the differences between cross-platform and native approaches. This will help you choose the
                                right path for your project.
                            </li>
                            <li className="leading-relaxed">
                                <strong>2. Choose Your Approach:</strong> Decide between cross-platform (React Native, Flutter)
                                or native (Kotlin, Swift). Cross-platform is great for getting started quickly, while native
                                offers the best performance and platform integration.
                            </li>
                            <li className="leading-relaxed">
                                <strong>3. Set Up Your Environment:</strong> Install the necessary tools (Android Studio for
                                Android, Xcode for iOS, or Expo CLI for React Native). Follow the getting started guide for your
                                chosen framework.
                            </li>
                            <li className="leading-relaxed">
                                <strong>4. Build Your First App:</strong> Start with a simple "Hello World" app, then gradually
                                add features like navigation, state management, and API integration.
                            </li>
                            <li className="leading-relaxed">
                                <strong>5. Learn Platform-Specific Features:</strong> Once comfortable with basics, explore
                                platform-specific features like push notifications, camera access, and native modules.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/mobile/comparison")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:chart-bar" width="32" height="32" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Framework Comparison</h3>
                            <p className="text-[#6b7280] text-sm text-left">Compare mobile frameworks</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={() => navigate("/alldocs/mobile/react-native")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:react" width="32" height="32" className="text-[#61DAFB]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Start with React Native</h3>
                            <p className="text-[#6b7280] text-sm text-left">Learn the most popular framework</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <p className="mt-8 mb-8 leading-relaxed text-[#6b7280]">
                Remember: Mobile development is a journey. Start with one approach, master it, and then explore others
                to expand your toolkit. Whether you choose cross-platform or native, focus on building great user
                experiences. Happy coding! 📱
            </p>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/mobile/comparison")}
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

