import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "overview", title: "Native macOS Overview" },
    { id: "swiftui-appkit", title: "SwiftUI vs AppKit" },
    { id: "project-setup", title: "Project Setup" },
    { id: "swiftui-example", title: "SwiftUI Example" },
    { id: "appkit-bridging", title: "AppKit Bridging" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'desktop-macos',
    title: 'macOS Native Development',
    category: 'DESKTOP',
    path: '/alldocs/desktop/macos',
    keywords: ['macos', 'swiftui', 'appkit', 'desktop', 'swift'],
    description: 'Build native macOS applications using SwiftUI and AppKit. Learn project setup, SwiftUI components, and bridging to AppKit.',
    searchableContent: `
        macOS Native Development
        SwiftUI AppKit guide
    `.trim()
};

const swiftUIExample = `
import SwiftUI

@main
struct MacApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .frame(minWidth: 800, minHeight: 600)
        }
        .windowStyle(.hiddenTitleBar)
    }
}

struct ContentView: View {
    @State private var text = "Hello macOS!"
    @State private var isDarkMode = false
    
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("SwiftUI macOS App")
                .font(.largeTitle)
                .fontWeight(.bold)
            
            TextEditor(text: $text)
                .font(.body)
                .frame(height: 200)
            
            Toggle("Enable Dark Mode", isOn: $isDarkMode)
            
            HStack {
                Button("Save") {
                    // Save action
                }
                .buttonStyle(.borderedProminent)
                
                Button("Quit") {
                    NSApplication.shared.terminate(nil)
                }
                .buttonStyle(.bordered)
            }
        }
        .padding(32)
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}
`;

const appKitBridge = `
import SwiftUI
import WebKit

struct WebView: NSViewRepresentable {
    let url: URL
    
    func makeNSView(context: Context) -> WKWebView {
        let webView = WKWebView()
        webView.navigationDelegate = context.coordinator
        webView.load(URLRequest(url: url))
        return webView
    }
    
    func updateNSView(_ nsView: WKWebView, context: Context) {
        nsView.load(URLRequest(url: url))
    }
    
    func makeCoordinator() -> Coordinator {
        Coordinator()
    }
    
    class Coordinator: NSObject, WKNavigationDelegate {}
}

struct ContentView: View {
    var body: some View {
        WebView(url: URL(string: "https://apple.com")!)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}
`;

export default function MacOSDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">NATIVE DEVELOPMENT</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Native macOS Development
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Build macOS apps using SwiftUI for modern UI and AppKit for low-level control.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:apple" className="w-70 h-70 text-black" />
            </div>

            <h2 id="overview" className="text-2xl font-semibold mt-12 mb-4">
                Why Build Native macOS Apps?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Native macOS apps provide the best performance, system integration, and user experience. With SwiftUI,
                you can build modern, responsive interfaces, while AppKit still powers many macOS features.
            </p>

            <h2 id="swiftui-appkit" className="text-2xl font-semibold mt-12 mb-4">
                SwiftUI vs AppKit
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold mb-2">SwiftUI</h3>
                    <ul className="text-sm text-[#4B5563] space-y-1">
                        <li>• Declarative UI</li>
                        <li>• Live previews</li>
                        <li>• Cross-platform</li>
                        <li>• Less boilerplate</li>
                    </ul>
                </div>
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold mb-2">AppKit</h3>
                    <ul className="text-sm text-[#4B5563] space-y-1">
                        <li>• Mature macOS APIs</li>
                        <li>• Low-level control</li>
                        <li>• Legacy compatibility</li>
                        <li>• Requires more code</li>
                    </ul>
                </div>
            </div>

            <h2 id="project-setup" className="text-2xl font-semibold mt-12 mb-4">
                Project Setup
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Use Xcode to create a new macOS app project. Choose SwiftUI as the interface and Swift as the language.
            </p>

            <h2 id="swiftui-example" className="text-2xl font-semibold mt-12 mb-4">
                SwiftUI Example
            </h2>

            <div className="mb-6">
                <CodeBlock code={swiftUIExample} language="swift" />
            </div>

            <h2 id="appkit-bridging" className="text-2xl font-semibold mt-12 mb-4">
                Bridging to AppKit
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                SwiftUI can host AppKit views using NSViewRepresentable. This allows incremental migration or access to AppKit-only features.
            </p>

            <div className="mb-6">
                <CodeBlock code={appKitBridge} language="swift" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Follow macOS Design Guidelines</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use native components, spacings, and behaviors to match macOS expectations.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Embrace SwiftUI</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use SwiftUI for new features. Fall back to AppKit only when necessary.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Optimize for Apple Silicon</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Compile for both Intel and Apple Silicon (Universal). Test performance on M1/M2 chips.
                    </p>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/desktop/tauri")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/desktop/dotnet")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:microsoft" width="40" height="40" className="text-[#0078D4]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Microsoft Stack - .NET</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

