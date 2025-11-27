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

const createProject = `
# Create new project in Android Studio:
# File > New > New Project
# Choose template (Empty Activity recommended)
# Configure project:
# - Name: MyApp
# - Package name: com.example.myapp
# - Language: Kotlin
# - Minimum SDK: API 24 (Android 7.0)
# - Build configuration: Gradle (Kotlin DSL)
`;

const gradleBuild = `
// build.gradle.kts (Project level)
plugins {
    id("com.android.application") version "8.1.0" apply false
    id("org.jetbrains.kotlin.android") version "1.9.0" apply false
}

// build.gradle.kts (App level)
plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.example.myapp"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.example.myapp"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.compose.ui:ui:1.5.4")
    // Add more dependencies
}
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
        </>
    )
}

