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
        DEVICES
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
        </>
    )
}
