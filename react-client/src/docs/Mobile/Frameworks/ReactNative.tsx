import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-rn", title: "What is React Native?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "your-first-app", title: "Your First App" },
    { id: "components", title: "Components & Styling" },
    { id: "navigation", title: "Navigation" },
    { id: "state-management", title: "State Management" },
    { id: "native-modules", title: "Native Modules" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'mobile-react-native',
    title: 'React Native Guide',
    category: 'MOBILE',
    path: '/alldocs/mobile/react-native',
    keywords: ['react native', 'mobile', 'javascript', 'ios', 'android', 'navigation', 'components'],
    description: 'Complete guide to React Native including getting started, components, navigation, state management, and best practices.',
    searchableContent: `
        React Native Guide
        Learn React Native from scratch
        Getting started with React Native
        Components, Navigation, State Management
    `.trim()
};

const installRN = `
# Install React Native CLI
npm install -g react-native-cli

# Create a new React Native project
npx react-native init MyApp

# Or use Expo (easier for beginners)
npx create-expo-app MyApp

# Navigate to project
cd MyApp

# Run on iOS (Mac only)
npm run ios

# Run on Android
npm run android
`;

const firstApp = `
// App.js
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.content}>
          <Text style={styles.title}>Hello React Native!</Text>
          <Text style={styles.counter}>Count: {count}</Text>
          <Button
            title="Increment"
            onPress={() => setCount(count + 1)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default App;
`;

const components = `
import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

function MyComponent() {
  const [text, setText] = React.useState('');

  return (
    <View style={{ padding: 20 }}>
      {/* Text Component */}
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Welcome to React Native
      </Text>

      {/* Image Component */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
        style={{ width: 200, height: 200, marginBottom: 10 }}
      />

      {/* Text Input */}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="Enter text..."
        value={text}
        onChangeText={setText}
      />

      {/* Touchable Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#4f46ff',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={() => console.log('Pressed!')}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Press Me
        </Text>
      </TouchableOpacity>
    </View>
  );
}
`;

const navigation = `
# Install React Navigation
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context

# For tab navigation
npm install @react-navigation/bottom-tabs

# For drawer navigation
npm install @react-navigation/drawer
`;

const navigationExample = `
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
`;

const stateManagement = `
// Using React Context for state management
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}

// Using Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      {/* Your app components */}
    </Provider>
  );
}
`;

const nativeModules = `
// Native Module Example (Android - Kotlin)
// android/app/src/main/java/com/myapp/CustomModule.kt
package com.myapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CustomModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    
    override fun getName() = "CustomModule"
    
    @ReactMethod
    fun showMessage(message: String) {
        // Native Android code
        android.util.Log.d("CustomModule", message)
    }
}

// JavaScript usage
import { NativeModules } from 'react-native';
const { CustomModule } = NativeModules;

CustomModule.showMessage('Hello from native!');
`;

export default function ReactNativeDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                React Native
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Build native mobile apps using React and JavaScript. Learn how to create iOS and Android apps with a single codebase.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:react" className="w-70 h-70 text-[#61DAFB]"/>
            </div>

            <h2 id="what-is-rn" className="text-2xl font-semibold mt-12 mb-4">
                What is React Native?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                React Native is a framework for building native mobile applications using React and JavaScript. Created
                by Facebook (Meta), it allows you to write code once and deploy it to both iOS and Android platforms.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Unlike hybrid frameworks that render web views, React Native compiles to native components, giving you
                the performance and look of native apps while sharing code between platforms.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Write Once, Run Anywhere:</strong> Share code between iOS and Android</li>
                            <li>• <strong>Native Performance:</strong> Uses native components, not web views</li>
                            <li>• <strong>Hot Reload:</strong> See changes instantly without rebuilding</li>
                            <li>• <strong>Large Ecosystem:</strong> Huge community and library ecosystem</li>
                            <li>• <strong>JavaScript/TypeScript:</strong> Use familiar web technologies</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                You can start with React Native CLI or Expo. Expo is recommended for beginners as it simplifies
                setup and deployment.
            </p>

            <div className="mb-6">
                <CodeBlock code={installRN} language="bash" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Prerequisites</h3>
                        <ul className="space-y-1 text-[#4B5563]">
                            <li>• Node.js (v14 or later)</li>
                            <li>• For iOS: Xcode and CocoaPods (Mac only)</li>
                            <li>• For Android: Android Studio and JDK</li>
                            <li>• Basic knowledge of React and JavaScript</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="your-first-app" className="text-2xl font-semibold mt-12 mb-4">
                Your First App
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Here's a simple React Native app with state management:
            </p>

            <div className="mb-6">
                <CodeBlock code={firstApp} language="jsx" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                React Native uses <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">StyleSheet</code> for styling,
                similar to CSS but optimized for mobile. Components are similar to React web components but use
                native mobile components instead of HTML elements.
            </p>

            <h2 id="components" className="text-2xl font-semibold mt-12 mb-4">
                Components & Styling
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                React Native provides built-in components that map to native mobile components. Here are some common ones:
            </p>

            <div className="mb-6">
                <CodeBlock code={components} language="jsx" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Common Components</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-[#4B5563]">
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">View</code> - Container (like div)</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">Text</code> - Text display</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">Image</code> - Image display</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">TextInput</code> - Text input</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">Button</code> - Button</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">TouchableOpacity</code> - Pressable</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">ScrollView</code> - Scrollable content</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">FlatList</code> - Efficient lists</div>
                </div>
            </div>

            <h2 id="navigation" className="text-2xl font-semibold mt-12 mb-4">
                Navigation
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                React Navigation is the standard library for navigation in React Native. It provides stack, tab,
                and drawer navigators.
            </p>

            <div className="mb-6">
                <CodeBlock code={navigation} language="bash" />
            </div>

            <div className="mb-6">
                <CodeBlock code={navigationExample} language="jsx" />
            </div>

            <h2 id="state-management" className="text-2xl font-semibold mt-12 mb-4">
                State Management
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                React Native uses the same state management patterns as React. You can use useState, Context API,
                or libraries like Redux Toolkit.
            </p>

            <div className="mb-6">
                <CodeBlock code={stateManagement} language="jsx" />
            </div>

            <h2 id="native-modules" className="text-2xl font-semibold mt-12 mb-4">
                Native Modules
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                When you need platform-specific features not available in React Native, you can create native modules
                in Swift/Kotlin and call them from JavaScript.
            </p>

            <div className="mb-6">
                <CodeBlock code={nativeModules} language="kotlin" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use FlatList for Long Lists</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">FlatList</code> is optimized
                        for performance and only renders visible items. Use it instead of mapping over arrays.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Optimize Images</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use appropriate image sizes, cache images, and consider using libraries like
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">react-native-fast-image</code>
                        for better performance.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Handle Platform Differences</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">Platform.OS</code> to
                        write platform-specific code when needed.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. Use TypeScript</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        TypeScript provides better type safety and developer experience. Most React Native projects
                        use TypeScript.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Next Steps</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Learn about Expo for easier development</li>
                    <li>• Explore React Navigation for complex navigation</li>
                    <li>• Study native modules for platform-specific features</li>
                    <li>• Learn about app deployment and app stores</li>
                </ul>
            </div>
        </>
    )
}

