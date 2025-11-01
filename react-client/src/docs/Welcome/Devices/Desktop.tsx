import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "cross-platform-frameworks", title: "Cross-Platform Frameworks" },
    { id: "native-technologies", title: "Native Technologies" }
]

export const metadata: GuideMetadata = {
    id: 'desktop',
    title: 'Desktop Development',
    category: 'WELCOME',
    path: '/alldocs/welcome/desktop',
    keywords: ['desktop', 'electron', 'tauri', 'native', 'windows', 'macos', 'linux', 'wpf', 'qt', 'gtk', '.net maui'],
    description: 'Create powerful desktop applications for Windows, macOS, and Linux. Learn about cross-platform frameworks and native development approaches.',
    searchableContent: `
        Desktop Development
        Create powerful desktop applications for Windows, macOS, and Linux. Learn about cross-platform frameworks and native development approaches.
        Cross-Platform Frameworks
        Electron
        Build desktop apps with web technologies. Create applications using JavaScript, HTML, and CSS with access to native APIs.
        Tauri
        Lightweight alternative to Electron using Rust. Build smaller, faster desktop applications with better security.
        .NET MAUI
        Multi-platform App UI framework from Microsoft. Build apps for Windows, macOS, iOS, and Android from a single codebase.
        Native Technologies
        Qt for C++ desktop applications
        WPF and WinForms for Windows apps
        SwiftUI for macOS applications
        GTK for Linux desktop apps
        Auto-updaters and distribution strategies
    `.trim()
};

export default function DesktopDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">DEVICES</p>
            <h1 className="text-3xl font-semibold mt-2">Desktop Development</h1>
            <p className="mt-2">
                Create powerful desktop applications for Windows, macOS, and Linux. Learn
                about cross-platform frameworks and native development approaches.
            </p>

            <h2 id="cross-platform-frameworks" className="text-2xl font-semibold mt-8 mb-4">Cross-Platform Frameworks</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Electron</h3>
                    <p className="mt-2 text-gray-700">
                        Build desktop apps with web technologies. Create applications using
                        JavaScript, HTML, and CSS with access to native APIs.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Tauri</h3>
                    <p className="mt-2 text-gray-700">
                        Lightweight alternative to Electron using Rust. Build smaller, faster
                        desktop applications with better security.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">.NET MAUI</h3>
                    <p className="mt-2 text-gray-700">
                        Multi-platform App UI framework from Microsoft. Build apps for Windows,
                        macOS, iOS, and Android from a single codebase.
                    </p>
                </div>
            </div>

            <h2 id="native-technologies" className="text-2xl font-semibold mt-8 mb-4">Native Technologies</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>Qt for C++ desktop applications</li>
                <li>WPF and WinForms for Windows apps</li>
                <li>SwiftUI for macOS applications</li>
                <li>GTK for Linux desktop apps</li>
                <li>Auto-updaters and distribution strategies</li>
            </ul>
        </>
    )
}
