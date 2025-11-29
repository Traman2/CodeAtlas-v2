import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "overview", title: "Overview" },
    { id: "performance-comparison", title: "Performance Comparison" },
    { id: "development-speed", title: "Development Speed" },
    { id: "learning-curve", title: "Learning Curve" },
    { id: "ecosystem", title: "Ecosystem & Community" },
    { id: "when-to-use", title: "When to Use Each Approach" }
]

export const metadata: GuideMetadata = {
    id: 'mobile-comparison',
    title: 'Mobile Framework Comparison',
    category: 'MOBILE',
    path: '/alldocs/mobile/comparison',
    keywords: ['comparison', 'react native', 'flutter', 'expo', 'swift', 'kotlin', 'mobile framework comparison'],
    description: 'Comprehensive comparison of mobile development frameworks including React Native, Flutter, Expo, Swift, and Kotlin.',
    searchableContent: `
        Mobile Framework Comparison
        Compare React Native, Flutter, Expo, Swift, Kotlin
        Performance, Development Speed, Learning Curve
    `.trim()
};

// Performance data (based on real-world benchmarks)
const performanceData = [
    { framework: 'Native (Swift/Kotlin)', score: 100, color: '#FA7343' },
    { framework: 'Flutter', score: 95, color: '#0175C2' },
    { framework: 'React Native', score: 85, color: '#61DAFB' },
    { framework: 'Expo', score: 80, color: '#000020' }
];

// Development speed (1-10 scale, higher is faster)
const devSpeedData = [
    { framework: 'Expo', speed: 9, color: '#000020' },
    { framework: 'React Native', speed: 8, color: '#61DAFB' },
    { framework: 'Flutter', speed: 7, color: '#0175C2' },
    { framework: 'Native', speed: 5, color: '#FA7343' }
];

// Learning curve (1-10 scale, lower is easier)
const learningCurveData = [
    { framework: 'Expo', difficulty: 3, color: '#000020' },
    { framework: 'React Native', difficulty: 4, color: '#61DAFB' },
    { framework: 'Flutter', difficulty: 5, color: '#0175C2' },
    { framework: 'Native', difficulty: 7, color: '#FA7343' }
];

// GitHub stars (in thousands, approximate)
const popularityData = [
    { framework: 'React Native', stars: 120, color: '#61DAFB' },
    { framework: 'Flutter', stars: 170, color: '#0175C2' },
    { framework: 'Expo', stars: 25, color: '#000020' },
    { framework: 'Native', stars: 50, color: '#FA7343' }
];

// Radar chart data
const radarData = [
    { subject: 'Performance', Native: 100, Flutter: 95, ReactNative: 85, Expo: 80 },
    { subject: 'Dev Speed', Native: 50, Flutter: 70, ReactNative: 80, Expo: 90 },
    { subject: 'Ecosystem', Native: 90, Flutter: 85, ReactNative: 95, Expo: 75 },
    { subject: 'Learning', Native: 30, Flutter: 50, ReactNative: 60, Expo: 70 },
    { subject: 'Code Reuse', Native: 0, Flutter: 90, ReactNative: 90, Expo: 90 },
    { subject: 'Platform Access', Native: 100, Flutter: 85, ReactNative: 80, Expo: 70 }
];

export default function MobileComparison() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Mobile Framework Comparison
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Compare React Native, Flutter, Expo, and Native development across multiple dimensions
            </p>

            <h2 id="overview" className="text-2xl font-semibold mt-12 mb-4">
                Overview
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Choosing the right mobile development approach is crucial for your project's success. Each framework
                and approach has its strengths. This comparison will help you make an informed decision.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:react" width="32" height="32" className="text-[#61DAFB]" />
                        <h3 className="font-semibold text-lg">React Native</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        JavaScript-based, large ecosystem, great for web developers
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:language-dart" width="32" height="32" className="text-[#0175C2]" />
                        <h3 className="font-semibold text-lg">Flutter</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        Dart-based, excellent performance, beautiful UI out of the box
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:rocket-launch" width="32" height="32" className="text-[#000020]" />
                        <h3 className="font-semibold text-lg">Expo</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        React Native framework, easiest to get started, managed workflow
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:code-tags" width="32" height="32" className="text-[#FA7343]" />
                        <h3 className="font-semibold text-lg">Native</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        Swift/Kotlin, best performance, full platform access
                    </p>
                </div>
            </div>

            <h2 id="performance-comparison" className="text-2xl font-semibold mt-12 mb-4">
                Performance Comparison
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Performance is critical for mobile apps. Native apps have the best performance, but modern
                cross-platform frameworks are getting very close.
            </p>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="framework" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="score" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Performance Notes</h3>
                <ul className="space-y-2 text-[#4B5563] text-sm">
                    <li>• <strong>Native:</strong> Best performance, direct access to platform APIs</li>
                    <li>• <strong>Flutter:</strong> Excellent performance, compiles to native code</li>
                    <li>• <strong>React Native:</strong> Good performance, uses native components</li>
                    <li>• <strong>Expo:</strong> Good performance, managed workflow may have some limitations</li>
                </ul>
            </div>

            <h2 id="development-speed" className="text-2xl font-semibold mt-12 mb-4">
                Development Speed
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                How quickly can you build and iterate? Cross-platform frameworks excel here, allowing you to
                write once and deploy to multiple platforms.
            </p>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={devSpeedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="framework" />
                        <YAxis domain={[0, 10]} />
                        <Tooltip formatter={(value) => `${value}/10`} />
                        <Legend />
                        <Bar dataKey="speed" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="learning-curve" className="text-2xl font-semibold mt-12 mb-4">
                Learning Curve
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                How easy is it to get started? This considers initial setup, documentation quality, and
                conceptual complexity.
            </p>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={learningCurveData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="framework" />
                        <YAxis domain={[0, 10]} />
                        <Tooltip formatter={(value) => `${value}/10 (lower is easier)`} />
                        <Legend />
                        <Bar dataKey="difficulty" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="ecosystem" className="text-2xl font-semibold mt-12 mb-4">
                Ecosystem & Community
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                A strong ecosystem means more libraries, tools, and community support. This affects how quickly
                you can find solutions and hire developers.
            </p>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">GitHub Stars (Thousands)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={popularityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="framework" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value}k stars`} />
                        <Legend />
                        <Bar dataKey="stars" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Comprehensive Comparison</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} />
                        <Radar name="Native" dataKey="Native" stroke="#FA7343" fill="#FA7343" fillOpacity={0.6} />
                        <Radar name="Flutter" dataKey="Flutter" stroke="#0175C2" fill="#0175C2" fillOpacity={0.6} />
                        <Radar name="React Native" dataKey="ReactNative" stroke="#61DAFB" fill="#61DAFB" fillOpacity={0.6} />
                        <Radar name="Expo" dataKey="Expo" stroke="#000020" fill="#000020" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="when-to-use" className="text-2xl font-semibold mt-12 mb-4">
                When to Use Each Approach
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:react" width="32" height="32" className="text-[#61DAFB]" />
                        <h3 className="font-semibold text-xl">Choose React Native When:</h3>
                    </div>
                    <ul className="space-y-2 text-[#4B5563]">
                        <li>• You have web React experience</li>
                        <li>• You want to share code between web and mobile</li>
                        <li>• You need a large ecosystem and community</li>
                        <li>• You want JavaScript/TypeScript everywhere</li>
                        <li>• You need frequent updates and hot reload</li>
                    </ul>
                </div>

                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:language-dart" width="32" height="32" className="text-[#0175C2]" />
                        <h3 className="font-semibold text-xl">Choose Flutter When:</h3>
                    </div>
                    <ul className="space-y-2 text-[#4B5563]">
                        <li>• You want the best cross-platform performance</li>
                        <li>• You need beautiful, consistent UI across platforms</li>
                        <li>• You're building a new app from scratch</li>
                        <li>• You want a single codebase with native feel</li>
                        <li>• You're comfortable learning Dart</li>
                    </ul>
                </div>

                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:rocket-launch" width="32" height="32" className="text-[#000020]" />
                        <h3 className="font-semibold text-xl">Choose Expo When:</h3>
                    </div>
                    <ul className="space-y-2 text-[#4B5563]">
                        <li>• You're new to mobile development</li>
                        <li>• You want the easiest setup and deployment</li>
                        <li>• You need OTA (Over-The-Air) updates</li>
                        <li>• You're building a prototype or MVP quickly</li>
                        <li>• You don't need custom native modules initially</li>
                    </ul>
                </div>

                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:code-tags" width="32" height="32" className="text-[#FA7343]" />
                        <h3 className="font-semibold text-xl">Choose Native When:</h3>
                    </div>
                    <ul className="space-y-2 text-[#4B5563]">
                        <li>• You need maximum performance</li>
                        <li>• You require full access to platform features</li>
                        <li>• You're building platform-specific apps</li>
                        <li>• You have separate iOS and Android teams</li>
                        <li>• You want the best user experience possible</li>
                    </ul>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">💡 Pro Tip</h3>
                <p className="text-[#4B5563] leading-relaxed">
                    Many successful apps use a hybrid approach: start with cross-platform for faster development,
                    then add native modules for performance-critical features. You can also use React Native or
                    Flutter for most of your app and write native code for specific features.
                </p>
            </div>

            <div className="flex gap-4 mt-8">
                <button
                    onClick={() => navigate("/alldocs/mobile/react-native")}
                    className="flex-1 px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Icon icon="mdi:react" width="24" height="24" className="text-[#61DAFB]" />
                    <span className="font-semibold">Learn React Native</span>
                </button>
                <button
                    onClick={() => navigate("/alldocs/mobile/flutter")}
                    className="flex-1 px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Icon icon="mdi:language-dart" width="24" height="24" className="text-[#0175C2]" />
                    <span className="font-semibold">Learn Flutter</span>
                </button>
            </div>
        </>
    )
}

