import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "cross-platform-frameworks", title: "Cross-Platform Frameworks" },
    { id: "native-development", title: "Native Development" }
]

export const metadata: GuideMetadata = {
    id: 'mobile',
    title: 'Mobile Development',
    category: 'WELCOME',
    path: '/alldocs/welcome/mobile',
    keywords: ['mobile', 'ios', 'android', 'react native', 'flutter', 'swift', 'kotlin', 'ionic', 'swiftui', 'jetpack compose'],
    description: 'Build native and cross-platform mobile applications for iOS and Android. Explore frameworks, tools, and best practices for mobile app development.',
    searchableContent: `
        Mobile Development
        Build native and cross-platform mobile applications for iOS and Android. Explore frameworks, tools, and best practices for mobile app development.
        Cross-Platform Frameworks
        React Native
        Build mobile apps using React and JavaScript. Learn about native modules, navigation, and platform-specific code.
        Flutter
        Google's UI toolkit for building natively compiled applications. Explore widgets, state management, and Dart programming language.
        Ionic
        Hybrid mobile app framework using web technologies. Build once and deploy to iOS, Android, and the web.
        Native Development
        Swift and SwiftUI for iOS development
        Kotlin and Jetpack Compose for Android
        Mobile UI/UX design patterns
        Push notifications and background tasks
        App store deployment and distribution
    `.trim()
};

export default function MobileDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">DEVICES</p>
            <h1 className="text-3xl font-semibold mt-2">Mobile Development</h1>
            <p className="mt-2">
                Build native and cross-platform mobile applications for iOS and Android.
                Explore frameworks, tools, and best practices for mobile app development.
            </p>

            <h2 id="cross-platform-frameworks" className="text-2xl font-semibold mt-8 mb-4">Cross-Platform Frameworks</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">React Native</h3>
                    <p className="mt-2 text-gray-700">
                        Build mobile apps using React and JavaScript. Learn about native modules,
                        navigation, and platform-specific code.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Flutter</h3>
                    <p className="mt-2 text-gray-700">
                        Google's UI toolkit for building natively compiled applications. Explore
                        widgets, state management, and Dart programming language.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Ionic</h3>
                    <p className="mt-2 text-gray-700">
                        Hybrid mobile app framework using web technologies. Build once and
                        deploy to iOS, Android, and the web.
                    </p>
                </div>
            </div>

            <h2 id="native-development" className="text-2xl font-semibold mt-8 mb-4">Native Development</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>Swift and SwiftUI for iOS development</li>
                <li>Kotlin and Jetpack Compose for Android</li>
                <li>Mobile UI/UX design patterns</li>
                <li>Push notifications and background tasks</li>
                <li>App store deployment and distribution</li>
            </ul>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/welcome/webdev")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/welcome/desktop")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:desktop-classic" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Devices - Desktop</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}
