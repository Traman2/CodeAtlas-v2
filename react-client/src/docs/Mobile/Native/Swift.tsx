import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-swift", title: "What is Swift?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "swift-basics", title: "Swift Basics" },
    { id: "xcode-setup", title: "Xcode Setup" },
    { id: "swiftui", title: "SwiftUI" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'mobile-swift',
    title: 'Swift & iOS Development',
    category: 'MOBILE',
    path: '/alldocs/mobile/swift',
    keywords: ['swift', 'ios', 'native', 'swiftui', 'xcode', 'mobile development', 'apple'],
    description: 'Complete guide to Swift and iOS native development including Swift basics, Xcode, SwiftUI, and best practices.',
    searchableContent: `
        Swift iOS Development
        Learn Swift from scratch
        Xcode, SwiftUI
    `.trim()
};

const installXcode = `
# Install Xcode from Mac App Store
# Xcode includes:
# - Swift compiler
# - iOS Simulator
# - Interface Builder
# - Instruments (profiling tools)

# Verify installation
xcodebuild -version

# Install Command Line Tools
xcode-select --install
`;

const swiftBasics = `
// Variables
let name = "Swift"  // Immutable (constant)
var count = 0       // Mutable

// Type Inference
let number = 42           // Int
let pi = 3.14             // Double
let message = "Hello"     // String

// Optionals (null safety)
var optionalString: String? = nil
if let unwrapped = optionalString {
    print(unwrapped)
}

// Guard Statement
guard let value = optionalString else {
    return
}
print(value)

// Functions
func greet(name: String) -> String {
    return "Hello, \\(name)"
}

// Closures
let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map { $0 * 2 }

// Structs and Classes
struct Point {
    var x: Double
    var y: Double
}

class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
}

// Enums with Associated Values
enum Result<T> {
    case success(T)
    case failure(Error)
}
`;

const swiftUIApp = `
// ContentView.swift
import SwiftUI

struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Count: \\(count)")
                .font(.largeTitle)
            
            Button(action: {
                count += 1
            }) {
                Text("Increment")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
        }
        .padding()
    }
}

// App.swift
import SwiftUI

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
`;

const swiftUIComponents = `
import SwiftUI

struct ComponentExamples: View {
    @State private var text = ""
    @State private var isOn = false
    
    var body: some View {
        VStack(spacing: 20) {
            // Text
            Text("Hello SwiftUI!")
                .font(.title)
                .foregroundColor(.blue)
            
            // Button
            Button("Click Me") {
                print("Button tapped!")
            }
            .buttonStyle(.borderedProminent)
            
            // TextField
            TextField("Enter text", text: $text)
                .textFieldStyle(.roundedBorder)
                .padding()
            
            // Toggle
            Toggle("Enable feature", isOn: $isOn)
            
            // List
            List {
                ForEach(0..<10) { index in
                    Text("Item \\(index)")
                }
            }
            
            // Image
            Image(systemName: "star.fill")
                .foregroundColor(.yellow)
                .font(.system(size: 50))
        }
        .padding()
    }
}

// Navigation
struct NavigationExample: View {
    var body: some View {
        NavigationView {
            List {
                NavigationLink("Go to Details") {
                    DetailView()
                }
            }
            .navigationTitle("Home")
        }
    }
}
`;

const propertyWrappers = `
import SwiftUI

struct PropertyWrapperExamples: View {
    // @State - Local state
    @State private var count = 0
    
    // @Binding - Two-way binding
    @Binding var sharedValue: String
    
    // @ObservedObject - External observable object
    @ObservedObject var viewModel: MyViewModel
    
    // @EnvironmentObject - Shared across views
    @EnvironmentObject var appState: AppState
    
    // @Published (in ObservableObject)
    class MyViewModel: ObservableObject {
        @Published var data: [String] = []
    }
}
`;

export default function SwiftDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">NATIVE DEVELOPMENT</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Swift & iOS Development
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Learn native iOS development with Swift, SwiftUI, and Xcode
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:language-swift" className="w-70 h-70 text-[#FA7343]"/>
            </div>

            <h2 id="what-is-swift" className="text-2xl font-semibold mt-12 mb-4">
                What is Swift?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Swift is Apple's modern programming language for iOS, macOS, watchOS, and tvOS development. Introduced
                in 2014, Swift is designed to be safe, fast, and expressive. It's the successor to Objective-C and is
                now the primary language for Apple platform development.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Swift combines the best features of modern programming languages with Apple's platform-specific
                optimizations. It's type-safe, has excellent performance, and provides a great developer experience.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Type Safe:</strong> Catches errors at compile time</li>
                            <li>• <strong>Optionals:</strong> Handles nil values safely</li>
                            <li>• <strong>Modern Syntax:</strong> Clean and expressive</li>
                            <li>• <strong>Performance:</strong> Fast execution, optimized for Apple hardware</li>
                            <li>• <strong>Interoperable:</strong> Works with Objective-C code</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                To develop iOS apps, you'll need Xcode, Apple's integrated development environment. Xcode is only
                available on macOS.
            </p>

            <div className="mb-6">
                <CodeBlock code={installXcode} language="bash" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Prerequisites</h3>
                        <ul className="space-y-1 text-[#4B5563]">
                            <li>• macOS (required for Xcode)</li>
                            <li>• Xcode (free from Mac App Store)</li>
                            <li>• Apple Developer Account (for device testing and App Store)</li>
                            <li>• iOS device or Simulator for testing</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="swift-basics" className="text-2xl font-semibold mt-12 mb-4">
                Swift Basics
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Here are essential Swift concepts you'll use in iOS development:
            </p>

            <div className="mb-6">
                <CodeBlock code={swiftBasics} language="swift" />
            </div>

            <h2 id="xcode-setup" className="text-2xl font-semibold mt-12 mb-4">
                Xcode Setup
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Xcode is Apple's IDE for iOS, macOS, and other Apple platform development. It includes everything
                you need: code editor, Interface Builder, Simulator, and debugging tools.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Xcode Features</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• <strong>SwiftUI Canvas:</strong> Preview UI in real-time</li>
                    <li>• <strong>Interface Builder:</strong> Visual UI design (for UIKit)</li>
                    <li>• <strong>iOS Simulator:</strong> Test apps without physical device</li>
                    <li>• <strong>Instruments:</strong> Performance profiling and debugging</li>
                    <li>• <strong>Source Control:</strong> Git integration built-in</li>
                </ul>
            </div>

            <h2 id="swiftui" className="text-2xl font-semibold mt-12 mb-4">
                SwiftUI
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                SwiftUI is Apple's modern framework for building user interfaces. It's declarative, similar to React
                or Flutter, and works across all Apple platforms.
            </p>

            <div className="mb-6">
                <CodeBlock code={swiftUIApp} language="swift" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                SwiftUI provides many built-in components:
            </p>

            <div className="mb-6">
                <CodeBlock code={swiftUIComponents} language="swift" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                SwiftUI uses property wrappers for state management:
            </p>

            <div className="mb-6">
                <CodeBlock code={propertyWrappers} language="swift" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">SwiftUI Benefits</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• <strong>Declarative:</strong> Describe UI, SwiftUI handles rendering</li>
                    <li>• <strong>Live Previews:</strong> See changes instantly in Xcode</li>
                    <li>• <strong>Cross-Platform:</strong> Same code for iOS, macOS, watchOS, tvOS</li>
                    <li>• <strong>Less Code:</strong> Much less boilerplate than UIKit</li>
                    <li>• <strong>Automatic Updates:</strong> UI updates when state changes</li>
                </ul>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use SwiftUI for New Projects</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        SwiftUI is the future of iOS UI. Use it for new projects instead of UIKit when possible.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Use Optionals Safely</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Always use optional binding (<code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">if let</code>,
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">guard let</code>) or
                        nil-coalescing operator (<code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">??</code>)
                        to handle optionals safely.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Prefer Value Types (Structs)</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use structs instead of classes when possible. Structs are value types and provide better
                        performance and safety.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. Use Property Wrappers Appropriately</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Understand when to use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">@State</code>,
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">@Binding</code>,
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">@ObservedObject</code>, etc.
                        Each has a specific use case.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Next Steps</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Learn about SwiftUI in depth</li>
                    <li>• Explore Combine framework for reactive programming</li>
                    <li>• Study iOS app lifecycle and state management</li>
                    <li>• Learn about app deployment to App Store</li>
                </ul>
            </div>
        </>
    )
}

