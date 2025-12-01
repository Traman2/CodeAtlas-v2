import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-flutter", title: "What is Flutter?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "your-first-app", title: "Your First App" },
    { id: "widgets", title: "Widgets & UI" },
    { id: "state-management", title: "State Management" },
    { id: "navigation", title: "Navigation" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'mobile-flutter',
    title: 'Flutter Guide',
    category: 'MOBILE',
    path: '/alldocs/mobile/flutter',
    keywords: ['flutter', 'dart', 'mobile', 'ios', 'android', 'widgets', 'state management'],
    description: 'Complete guide to Flutter including getting started, widgets, state management, navigation, and best practices.',
    searchableContent: `
        Flutter Guide
        Learn Flutter from scratch
        Getting started with Flutter
        Widgets, State Management, Navigation
    `.trim()
};

const installFlutter = `
# Install Flutter SDK
# Download from https://flutter.dev/docs/get-started/install

# Verify installation
flutter doctor

# Create a new Flutter project
flutter create my_app
cd my_app

# Run the app
flutter run

# Run on specific device
flutter run -d ios
flutter run -d android
`;

const firstApp = `
// lib/main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Flutter Demo'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}
`;

const widgets = `
import 'package:flutter/material.dart';

class WidgetExamples extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Widget Examples')),
      body: Column(
        children: [
          // Text Widget
          Text(
            'Hello Flutter!',
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Colors.blue,
            ),
          ),
          
          // Container Widget
          Container(
            width: 200,
            height: 200,
            decoration: BoxDecoration(
              color: Colors.blue,
              borderRadius: BorderRadius.circular(10),
            ),
            child: Center(
              child: Text('Container'),
            ),
          ),
          
          // Row Widget
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Icon(Icons.star, color: Colors.amber),
              Icon(Icons.star, color: Colors.amber),
              Icon(Icons.star, color: Colors.amber),
            ],
          ),
          
          // Button Widget
          ElevatedButton(
            onPressed: () {
              print('Button pressed!');
            },
            child: Text('Click Me'),
          ),
          
          // TextField Widget
          TextField(
            decoration: InputDecoration(
              labelText: 'Enter text',
              border: OutlineInputBorder(),
            ),
          ),
        ],
      ),
    );
  }
}
`;

const stateManagement = `
// Using setState (for simple state)
class CounterWidget extends StatefulWidget {
  @override
  _CounterWidgetState createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_count'),
        ElevatedButton(
          onPressed: () {
            setState(() {
              _count++;
            });
          },
          child: Text('Increment'),
        ),
      ],
    );
  }
}

// Using Provider (recommended for complex apps)
// pubspec.yaml: provider: ^6.0.0

import 'package:provider/provider.dart';

class CounterModel extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

// In main.dart
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CounterModel(),
      child: MyApp(),
    ),
  );
}

// In widget
Consumer<CounterModel>(
  builder: (context, counter, child) {
    return Text('Count: \${counter.count}');
  },
)
`;

const navigation = `
// Basic Navigation
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => SecondScreen(),
  ),
);

// Named Routes
// In main.dart
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => HomeScreen(),
    '/details': (context) => DetailsScreen(),
  },
)

// Navigate
Navigator.pushNamed(context, '/details');

// Using GoRouter (recommended for complex apps)
// pubspec.yaml: go_router: ^12.0.0

import 'package:go_router/go_router.dart';

final router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomeScreen(),
    ),
    GoRoute(
      path: '/details/:id',
      builder: (context, state) {
        final id = state.pathParameters['id']!;
        return DetailsScreen(id: id);
      },
    ),
  ],
);
`;

export default function FlutterDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Flutter
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="vscode-icons:file-type-flutter" className="w-70 h-70 text-[#0175C2]"/>
            </div>

            <h2 id="what-is-flutter" className="text-2xl font-semibold mt-12 mb-4">
                What is Flutter?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Flutter is Google's open-source UI toolkit for building natively compiled applications. It uses the Dart
                programming language and compiles to native code, providing excellent performance and a consistent UI
                across platforms.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Flutter's key differentiator is its widget-based architecture. Everything in Flutter is a widget, from
                buttons to layouts, creating a highly composable and flexible development experience.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Single Codebase:</strong> Write once, deploy to iOS, Android, Web, Desktop</li>
                            <li>• <strong>Native Performance:</strong> Compiles to native code</li>
                            <li>• <strong>Beautiful UI:</strong> Rich set of customizable widgets</li>
                            <li>• <strong>Hot Reload:</strong> See changes instantly</li>
                            <li>• <strong>Dart Language:</strong> Modern, easy-to-learn language</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Flutter requires the Flutter SDK to be installed. Follow these steps:
            </p>

            <div className="mb-6">
                <CodeBlock code={installFlutter} language="bash" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Prerequisites</h3>
                        <ul className="space-y-1 text-[#4B5563]">
                            <li>• Flutter SDK (download from flutter.dev)</li>
                            <li>• For iOS: Xcode (Mac only)</li>
                            <li>• For Android: Android Studio</li>
                            <li>• Dart language (comes with Flutter)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="your-first-app" className="text-2xl font-semibold mt-12 mb-4">
                Your First App
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Here's a simple Flutter app with state management:
            </p>

            <div className="mb-6">
                <CodeBlock code={firstApp} language="dart" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Flutter uses a widget tree structure. Everything is a widget, and you compose widgets to build your UI.
                The <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">setState</code> method triggers
                a rebuild when state changes.
            </p>

            <h2 id="widgets" className="text-2xl font-semibold mt-12 mb-4">
                Widgets & UI
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Flutter has a rich set of built-in widgets. Here are some common ones:
            </p>

            <div className="mb-6">
                <CodeBlock code={widgets} language="dart" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Common Widgets</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-[#4B5563]">
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">Text</code> - Display text</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">Container</code> - Box with styling</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">Row/Column</code> - Layout widgets</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">ElevatedButton</code> - Button</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">TextField</code> - Text input</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">ListView</code> - Scrollable list</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">Image</code> - Display images</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">Scaffold</code> - App structure</div>
                </div>
            </div>

            <h2 id="state-management" className="text-2xl font-semibold mt-12 mb-4">
                State Management
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Flutter offers several state management solutions. For simple apps, <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">setState</code>
                is sufficient. For complex apps, use Provider, Riverpod, Bloc, or GetX.
            </p>

            <div className="mb-6">
                <CodeBlock code={stateManagement} language="dart" />
            </div>

            <h2 id="navigation" className="text-2xl font-semibold mt-12 mb-4">
                Navigation
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Flutter provides built-in navigation, but for complex apps, consider using GoRouter or similar packages.
            </p>

            <div className="mb-6">
                <CodeBlock code={navigation} language="dart" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use const Constructors</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">const</code> constructors
                        when possible to improve performance by avoiding unnecessary rebuilds.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Extract Widgets</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Break down large widgets into smaller, reusable widgets. This improves readability and performance.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Use Keys Wisely</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use keys to preserve widget state when widgets move in the widget tree. Essential for lists and
                        animations.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. Optimize Build Methods</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Keep build methods lightweight. Move expensive operations outside of build methods and use
                        state management for complex logic.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Next Steps</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Learn about Flutter's widget system in depth</li>
                    <li>• Explore state management solutions (Provider, Riverpod)</li>
                    <li>• Study Flutter's animation and transition system</li>
                    <li>• Learn about platform channels for native code integration</li>
                </ul>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/mobile/react-native")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/mobile/expo")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:expo" width="40" height="40" className="text-[#000020]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Frameworks - Expo</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

