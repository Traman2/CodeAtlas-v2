import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-kotlin", title: "What is Kotlin?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "kotlin-basics", title: "Kotlin Basics" },
    { id: "android-studio", title: "Android Studio Setup" },
    { id: "jetpack-compose", title: "Jetpack Compose" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'mobile-kotlin',
    title: 'Kotlin & Android Development',
    category: 'MOBILE',
    path: '/alldocs/mobile/kotlin',
    keywords: ['kotlin', 'android', 'native', 'jetpack compose', 'android studio', 'mobile development'],
    description: 'Complete guide to Kotlin and Android native development including Kotlin basics, Android Studio, Jetpack Compose, and best practices.',
    searchableContent: `
        Kotlin Android Development
        Learn Kotlin from scratch
        Android Studio, Jetpack Compose
    `.trim()
};

const installAndroid = `
# Install Android Studio from:
# https://developer.android.com/studio

# After installation, install:
# - Android SDK
# - Android SDK Platform-Tools
# - Android Emulator

# Verify installation
adb --version
`;

const kotlinBasics = `
// Variables
val name = "Kotlin"  // Immutable (like const)
var count = 0        // Mutable

// Null Safety
var nullable: String? = null
val length = nullable?.length  // Safe call operator
val result = nullable ?: "default"  // Elvis operator

// Functions
fun greet(name: String): String {
    return "Hello, $name"
}

// Single expression function
fun double(x: Int) = x * 2

// Data Classes
data class User(
    val id: Int,
    val name: String,
    val email: String
)

// Extension Functions
fun String.removeSpaces(): String {
    return this.replace(" ", "")
}

// When Expression (like switch)
when (x) {
    1 -> print("One")
    2 -> print("Two")
    else -> print("Other")
}
`;

const firstActivity = `
// MainActivity.kt
package com.example.myapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyAppTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    CounterScreen()
                }
            }
        }
    }
}

@Composable
fun CounterScreen() {
    var count by remember { mutableStateOf(0) }
    
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Count: $count",
            style = MaterialTheme.typography.headlineMedium
        )
        Spacer(modifier = Modifier.height(16.dp))
        Button(onClick = { count++ }) {
            Text("Increment")
        }
    }
}
`;

const jetpackCompose = `
// Jetpack Compose - Modern Android UI
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier

@Composable
fun MyScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        // Text
        Text(
            text = "Hello Compose!",
            style = MaterialTheme.typography.headlineLarge
        )
        
        Spacer(modifier = Modifier.height(16.dp))
        
        // Button
        Button(onClick = { /* Handle click */ }) {
            Text("Click Me")
        }
        
        // TextField
        var text by remember { mutableStateOf("") }
        TextField(
            value = text,
            onValueChange = { text = it },
            label = { Text("Enter text") }
        )
        
        // List
        LazyColumn {
            items(10) { index ->
                Text("Item $index")
                Divider()
            }
        }
    }
}

// State Management
@Composable
fun Counter() {
    var count by remember { mutableStateOf(0) }
    
    Column {
        Text("Count: $count")
        Button(onClick = { count++ }) {
            Text("Increment")
        }
    }
}
`;

const androidManifest = `
// AndroidManifest.xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/Theme.MyApp">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
`;

export default function KotlinDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">NATIVE DEVELOPMENT</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Kotlin & Android Development
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Learn native Android development with Kotlin, Jetpack Compose, and Android Studio
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:language-kotlin" className="w-70 h-70 text-[#7F52FF]"/>
            </div>

            <h2 id="what-is-kotlin" className="text-2xl font-semibold mt-12 mb-4">
                What is Kotlin?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Kotlin is a modern, statically-typed programming language developed by JetBrains. It's the preferred
                language for Android development, officially supported by Google since 2017. Kotlin is fully
                interoperable with Java and offers many modern language features.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Kotlin is concise, safe, and expressive. It eliminates many common programming errors through
                null safety, type inference, and other language features.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Null Safety:</strong> Prevents null pointer exceptions</li>
                            <li>• <strong>Concise Syntax:</strong> Less boilerplate than Java</li>
                            <li>• <strong>Interoperable:</strong> Works seamlessly with Java</li>
                            <li>• <strong>Coroutines:</strong> Built-in support for async programming</li>
                            <li>• <strong>Extension Functions:</strong> Add methods to existing classes</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                To develop Android apps, you'll need Android Studio, the official IDE for Android development.
            </p>

            <div className="mb-6">
                <CodeBlock code={installAndroid} language="bash" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Prerequisites</h3>
                        <ul className="space-y-1 text-[#4B5563]">
                            <li>• Android Studio (includes Kotlin support)</li>
                            <li>• Android SDK (installed via Android Studio)</li>
                            <li>• Java Development Kit (JDK 11 or later)</li>
                            <li>• Android device or emulator for testing</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="kotlin-basics" className="text-2xl font-semibold mt-12 mb-4">
                Kotlin Basics
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Here are essential Kotlin concepts you'll use in Android development:
            </p>

            <div className="mb-6">
                <CodeBlock code={kotlinBasics} language="kotlin" />
            </div>

            <h2 id="android-studio" className="text-2xl font-semibold mt-12 mb-4">
                Android Studio Setup
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Android Studio is the official IDE for Android development. It includes everything you need:
                code editor, emulator, debugger, and build tools.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Android Studio Features</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• <strong>Visual Layout Editor:</strong> Design UIs visually</li>
                    <li>• <strong>Code Completion:</strong> IntelliSense for Kotlin</li>
                    <li>• <strong>Emulator:</strong> Test apps without physical device</li>
                    <li>• <strong>Profiler:</strong> Performance analysis tools</li>
                    <li>• <strong>Gradle Integration:</strong> Build system built-in</li>
                </ul>
            </div>

            <h2 id="jetpack-compose" className="text-2xl font-semibold mt-12 mb-4">
                Jetpack Compose
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Jetpack Compose is Android's modern toolkit for building native UI. It's declarative, similar to
                React or Flutter, and written in Kotlin.
            </p>

            <div className="mb-6">
                <CodeBlock code={firstActivity} language="kotlin" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                More Compose examples:
            </p>

            <div className="mb-6">
                <CodeBlock code={jetpackCompose} language="kotlin" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Jetpack Compose Benefits</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• <strong>Declarative:</strong> Describe UI, Compose handles rendering</li>
                    <li>• <strong>Less Code:</strong> Much less boilerplate than XML layouts</li>
                    <li>• <strong>Type-Safe:</strong> Compile-time safety for UI</li>
                    <li>• <strong>Reactive:</strong> UI updates automatically when state changes</li>
                    <li>• <strong>Kotlin-First:</strong> Everything in Kotlin, no XML</li>
                </ul>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use Jetpack Compose for New Projects</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Jetpack Compose is the future of Android UI. Use it for new projects instead of XML layouts.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Leverage Kotlin's Null Safety</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use nullable types (<code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">?</code>)
                        and safe call operators to prevent null pointer exceptions.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Use Data Classes</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Data classes automatically generate <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">equals</code>,
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">hashCode</code>, and
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">toString</code> methods.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. Use Coroutines for Async Operations</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Kotlin coroutines provide a clean way to handle asynchronous operations without callbacks.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Next Steps</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Learn about Android Architecture Components (ViewModel, LiveData)</li>
                    <li>• Explore Jetpack Compose in depth</li>
                    <li>• Study Android lifecycle and state management</li>
                    <li>• Learn about app deployment to Google Play Store</li>
                </ul>
            </div>
        </>
    )
}

