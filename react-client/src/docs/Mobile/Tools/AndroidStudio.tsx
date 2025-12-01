import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-as", title: "What is Android Studio?" },
    { id: "installation", title: "Installation & Setup" },
    { id: "features", title: "Key Features" },
    { id: "emulator", title: "Android Emulator" },
    { id: "debugging", title: "Debugging" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'mobile-tools-android-studio',
    title: 'Android Studio - Development Tool',
    category: 'MOBILE',
    path: '/alldocs/mobile/tools/android-studio',
    keywords: ['android studio', 'ide', 'android development', 'emulator', 'debugging'],
    description: 'Learn how to use Android Studio for Android development including setup, emulator, debugging, and best practices.',
    searchableContent: `
        Android Studio IDE
        Android development tool
        Emulator, Debugging
    `.trim()
};

const installAS = `
# Download Android Studio from:
# https://developer.android.com/studio

# After installation:
# 1. Open Android Studio
# 2. Go through setup wizard
# 3. Install Android SDK
# 4. Install Android SDK Platform-Tools
# 5. Install Android Emulator

# Verify installation
adb --version
`;

const emulatorSetup = `
# Create Android Virtual Device (AVD)
# Tools > Device Manager > Create Device

# Choose device definition:
# - Pixel 5 (recommended for testing)
# - Or any device you want to test

# Choose system image:
# - API Level 34 (Android 14)
# - Download if not installed

# Configure AVD:
# - Name: Pixel_5_API_34
# - Startup orientation: Portrait
# - Graphics: Automatic

# Run emulator
# Click Play button in Device Manager
# Or: emulator -avd Pixel_5_API_34
`;

const debugging = `
// Using Logcat for debugging
import android.util.Log

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Debug log
        Log.d("MainActivity", "onCreate called")
        
        // Error log
        Log.e("MainActivity", "Error occurred", exception)
        
        // Info log
        Log.i("MainActivity", "Info message")
    }
}

// Using breakpoints
// 1. Click left margin to set breakpoint
// 2. Run app in debug mode (bug icon)
// 3. App pauses at breakpoint
// 4. Inspect variables in Debug panel
// 5. Step through code (F8, F7, F9)
`;

export default function AndroidStudioDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">TOOLS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Android Studio
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                The official IDE for Android development. Learn how to use Android Studio effectively.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:android-studio" className="w-70 h-70 text-[#3DDC84]"/>
            </div>

            <h2 id="what-is-as" className="text-2xl font-semibold mt-12 mb-4">
                What is Android Studio?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Android Studio is the official integrated development environment (IDE) for Android app development.
                It's based on IntelliJ IDEA and provides everything you need to develop, test, and debug Android apps.
            </p>

            <h2 id="installation" className="text-2xl font-semibold mt-12 mb-4">
                Installation & Setup
            </h2>

            <div className="mb-6">
                <CodeBlock code={installAS} language="bash" />
            </div>

            <h2 id="features" className="text-2xl font-semibold mt-12 mb-4">
                Key Features
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Code Editor</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Intelligent code completion, refactoring, and error detection for Kotlin and Java.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Layout Editor</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Visual editor for designing UI layouts (for XML layouts, not Compose).
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Gradle Build System</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Integrated Gradle for building, testing, and packaging Android apps.
                    </p>
                </div>
            </div>

            <h2 id="emulator" className="text-2xl font-semibold mt-12 mb-4">
                Android Emulator
            </h2>

            <div className="mb-6">
                <CodeBlock code={emulatorSetup} language="bash" />
            </div>

            <h2 id="debugging" className="text-2xl font-semibold mt-12 mb-4">
                Debugging
            </h2>

            <div className="mb-6">
                <CodeBlock code={debugging} language="kotlin" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use Logcat Effectively</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Filter logs by tag, level, or package name. Use appropriate log levels (Debug, Info, Error).
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Use Breakpoints</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Set breakpoints to pause execution and inspect variables. Use conditional breakpoints for
                        specific scenarios.
                    </p>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/mobile/swift")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/mobile/xcode")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:apple" width="40" height="40" className="text-[#000000]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Tools - Xcode</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

