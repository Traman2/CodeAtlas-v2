import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';
import { useNavigate } from "react-router-dom";

export const sections = [
    { id: "what-is-xcode", title: "What is Xcode?" },
    { id: "installation", title: "Installation & Setup" },
    { id: "features", title: "Key Features" },
    { id: "simulator", title: "iOS Simulator" },
    { id: "debugging", title: "Debugging" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'mobile-tools-xcode',
    title: 'Xcode - Development Tool',
    category: 'MOBILE',
    path: '/alldocs/mobile/tools/xcode',
    keywords: ['xcode', 'ide', 'ios development', 'simulator', 'debugging', 'swift'],
    description: 'Learn how to use Xcode for iOS development including setup, simulator, debugging, and best practices.',
    searchableContent: `
        Xcode IDE
        iOS development tool
        Simulator, Debugging
    `.trim()
};

const installXcode = `
# Install Xcode from Mac App Store
# Search for "Xcode" and install (free, but large ~15GB)

# After installation:
# 1. Open Xcode
# 2. Accept license agreement
# 3. Install additional components when prompted

# Install Command Line Tools
xcode-select --install

# Verify installation
xcodebuild -version
swift --version
`;

const swiftUIPreview = `
// ContentView.swift
import SwiftUI

struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("Count: \\(count)")
            Button("Increment") {
                count += 1
            }
        }
    }
}

// Preview (appears in Xcode canvas)
#Preview {
    ContentView()
}

// Preview with different configurations
#Preview("Dark Mode") {
    ContentView()
        .preferredColorScheme(.dark)
}

#Preview("iPhone SE") {
    ContentView()
        .previewDevice("iPhone SE (3rd generation)")
}
`;

const simulator = `
# iOS Simulator
# Xcode > Open Developer Tool > Simulator

# Or from command line:
xcrun simctl list devices
open -a Simulator

# Run app on simulator:
# 1. Select simulator from device menu
# 2. Click Run button (⌘R)
# 3. Or: Product > Run

# Simulator shortcuts:
# ⌘ + ← → : Rotate device
# ⌘ + K : Toggle keyboard
# ⌘ + Shift + H : Home button
# ⌘ + Control + Z : Shake gesture
`;

const debugging = `
// Using print() for debugging
print("Debug message: \\(variable)")

// Using breakpoints
// 1. Click left margin to set breakpoint
// 2. Run app in debug mode (⌘R)
// 3. App pauses at breakpoint
// 4. Inspect variables in Debug panel
// 5. Use LLDB commands:
//    - po variable : Print object
//    - p variable : Print value
//    - expr variable = newValue : Change value

// Using assertions
assert(condition, "Error message")

// Using fatalError for unrecoverable errors
fatalError("This should never happen")
`;

export default function XcodeDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">TOOLS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Xcode
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Apple's integrated development environment for iOS, macOS, and other Apple platform development.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:apple" className="w-70 h-70 text-[#FA7343]"/>
            </div>

            <h2 id="what-is-xcode" className="text-2xl font-semibold mt-12 mb-4">
                What is Xcode?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Xcode is Apple's integrated development environment (IDE) for developing software for macOS, iOS,
                watchOS, and tvOS. It includes the Swift compiler, Interface Builder, iOS Simulator, and debugging tools.
            </p>

            <h2 id="installation" className="text-2xl font-semibold mt-12 mb-4">
                Installation & Setup
            </h2>

            <div className="mb-6">
                <CodeBlock code={installXcode} language="bash" />
            </div>

            <h2 id="features" className="text-2xl font-semibold mt-12 mb-4">
                Key Features
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">SwiftUI Canvas</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Live preview of SwiftUI views. See changes instantly as you code.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Interface Builder</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Visual editor for designing UIKit interfaces (for legacy projects).
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Source Control</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Built-in Git integration for version control.
                    </p>
                </div>
            </div>

            <h2 id="simulator" className="text-2xl font-semibold mt-12 mb-4">
                iOS Simulator
            </h2>

            <div className="mb-6">
                <CodeBlock code={simulator} language="bash" />
            </div>

            <h2 id="debugging" className="text-2xl font-semibold mt-12 mb-4">
                Debugging
            </h2>

            <div className="mb-6">
                <CodeBlock code={debugging} language="swift" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                SwiftUI Preview for live debugging:
            </p>

            <div className="mb-6">
                <CodeBlock code={swiftUIPreview} language="swift" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use SwiftUI Canvas</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Enable canvas preview (⌘⌥↩) to see your UI changes in real-time. This dramatically speeds
                        up development.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Use Breakpoints Effectively</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Set breakpoints to pause execution. Use LLDB commands to inspect and modify variables
                        during debugging.
                    </p>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/mobile/androidstudio")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

