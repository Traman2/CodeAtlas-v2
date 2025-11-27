import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-expo", title: "What is Expo?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "your-first-app", title: "Your First App" },
    { id: "expo-sdk", title: "Expo SDK & APIs" },
    { id: "managed-vs-bare", title: "Managed vs Bare Workflow" },
    { id: "deployment", title: "Deployment & Updates" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'mobile-expo',
    title: 'Expo Guide',
    category: 'MOBILE',
    path: '/alldocs/mobile/expo',
    keywords: ['expo', 'react native', 'mobile', 'ios', 'android', 'managed workflow', 'ota updates'],
    description: 'Complete guide to Expo including getting started, Expo SDK, managed vs bare workflow, deployment, and best practices.',
    searchableContent: `
        Expo Guide
        Learn Expo from scratch
        Getting started with Expo
        Managed workflow, OTA updates
    `.trim()
};

const installExpo = `
# Install Expo CLI
npm install -g expo-cli

# Or use npx (recommended)
npx create-expo-app MyApp

# Navigate to project
cd MyApp

# Start development server
npx expo start

# Or use Expo Go app on your phone
# Scan QR code to run on device
`;

const firstApp = `
// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Expo!</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button
        title="Increment"
        onPress={() => setCount(count + 1)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
`;

const expoSdk = `
// Using Expo APIs
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Notifications } from 'expo-notifications';

// Location API
async function getLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return;
  }
  let location = await Location.getCurrentPositionAsync({});
  console.log(location);
}

// Camera API
async function takePicture() {
  const { status } = await Camera.requestCameraPermissionsAsync();
  if (status === 'granted') {
    // Camera access granted
  }
}

// Image Picker
async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
}

// Notifications
async function scheduleNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hello!",
      body: "This is a notification",
    },
    trigger: { seconds: 2 },
  });
}
`;

const managedWorkflow = `
// Managed Workflow - Expo handles everything
// app.json
{
  "expo": {
    "name": "MyApp",
    "slug": "my-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.myapp"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.myapp"
    }
  }
}

// Build with EAS (Expo Application Services)
eas build --platform ios
eas build --platform android
`;

const bareWorkflow = `
// Bare Workflow - Eject from managed workflow
# Eject to bare workflow
npx expo eject

# This creates native iOS and Android folders
# You can now add custom native code

# Install pods (iOS)
cd ios && pod install

# Run native builds
npx react-native run-ios
npx react-native run-android
`;

const deployment = `
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure project
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Submit to app stores
eas submit --platform ios
eas submit --platform android

# Publish OTA update
eas update --branch production --message "Bug fixes"
`;

export default function ExpoDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Expo
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Framework and platform for React Native. Simplifies development with managed workflow and OTA updates.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:rocket-launch" className="w-70 h-70 text-[#000020]"/>
            </div>

            <h2 id="what-is-expo" className="text-2xl font-semibold mt-12 mb-4">
                What is Expo?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Expo is a framework and platform for React Native that makes mobile development easier. It provides
                a managed workflow where Expo handles the build configuration, and you can deploy updates over-the-air
                (OTA) without going through app stores.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Expo includes a rich set of APIs for common mobile features like camera, location, notifications,
                and more, all accessible through JavaScript without writing native code.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Easy Setup:</strong> No need to configure Xcode or Android Studio</li>
                            <li>• <strong>Expo Go:</strong> Test apps instantly on your phone</li>
                            <li>• <strong>OTA Updates:</strong> Push updates without app store approval</li>
                            <li>• <strong>Rich APIs:</strong> Camera, location, notifications, and more</li>
                            <li>• <strong>EAS Build:</strong> Cloud-based builds for iOS and Android</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Expo is the easiest way to get started with React Native. No need to install Xcode or Android Studio
                initially - you can use Expo Go on your phone.
            </p>

            <div className="mb-6">
                <CodeBlock code={installExpo} language="bash" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Expo Go App</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            Install Expo Go from the App Store or Google Play. Scan the QR code from
                            <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">expo start</code> to
                            run your app instantly on your device - no build required!
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="your-first-app" className="text-2xl font-semibold mt-12 mb-4">
                Your First App
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Here's a simple Expo app:
            </p>

            <div className="mb-6">
                <CodeBlock code={firstApp} language="jsx" />
            </div>

            <h2 id="expo-sdk" className="text-2xl font-semibold mt-12 mb-4">
                Expo SDK & APIs
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Expo provides many APIs for common mobile features. Here are some examples:
            </p>

            <div className="mb-6">
                <CodeBlock code={expoSdk} language="jsx" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Available Expo APIs</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-[#4B5563]">
                    <div>• Camera & Image Picker</div>
                    <div>• Location Services</div>
                    <div>• Push Notifications</div>
                    <div>• File System</div>
                    <div>• Secure Store</div>
                    <div>• Contacts</div>
                    <div>• Calendar</div>
                    <div>• Audio/Video</div>
                </div>
            </div>

            <h2 id="managed-vs-bare" className="text-2xl font-semibold mt-12 mb-4">
                Managed vs Bare Workflow
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Expo offers two workflows: Managed (Expo handles everything) and Bare (you have full control).
            </p>

            <div className="space-y-6 mb-8">
                <div>
                    <h3 className="font-semibold text-lg mb-3">Managed Workflow</h3>
                    <div className="mb-4">
                        <CodeBlock code={managedWorkflow} language="json" />
                    </div>
                    <div className="px-4 py-3 bg-white border border-[#e0e0e0] rounded">
                        <p className="text-sm text-[#4B5563]">
                            <strong>Pros:</strong> Easiest setup, OTA updates, no native code needed<br/>
                            <strong>Cons:</strong> Limited to Expo APIs, larger app size
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-3">Bare Workflow</h3>
                    <div className="mb-4">
                        <CodeBlock code={bareWorkflow} language="bash" />
                    </div>
                    <div className="px-4 py-3 bg-white border border-[#e0e0e0] rounded">
                        <p className="text-sm text-[#4B5563]">
                            <strong>Pros:</strong> Full control, custom native modules, smaller bundles<br/>
                            <strong>Cons:</strong> More complex setup, need Xcode/Android Studio
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="deployment" className="text-2xl font-semibold mt-12 mb-4">
                Deployment & Updates
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Expo makes deployment easy with EAS (Expo Application Services). Build, submit, and update your apps
                from the command line.
            </p>

            <div className="mb-6">
                <CodeBlock code={deployment} language="bash" />
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Start with Managed Workflow</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use managed workflow initially. You can always eject to bare workflow later if needed.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Use OTA Updates Wisely</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        OTA updates are great for JavaScript changes, but native code changes require new builds.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Test on Real Devices</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use Expo Go for quick testing, but always test production builds on real devices before release.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Next Steps</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Explore Expo SDK APIs for your use case</li>
                    <li>• Learn about EAS Build and Submit</li>
                    <li>• Study OTA update strategies</li>
                    <li>• Consider when to eject to bare workflow</li>
                </ul>
            </div>
        </>
    )
}

