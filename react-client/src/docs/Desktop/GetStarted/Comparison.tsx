import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "overview", title: "Overview" },
    { id: "performance", title: "Performance" },
    { id: "dev-speed", title: "Development Speed" },
    { id: "learning-curve", title: "Learning Curve" },
    { id: "ecosystem", title: "Ecosystem & Tooling" },
    { id: "when-to-use", title: "When to Use Each Approach" }
]

export const metadata: GuideMetadata = {
    id: 'desktop-comparison',
    title: 'Desktop Framework Comparison',
    category: 'DESKTOP',
    path: '/alldocs/desktop/comparison',
    keywords: ['desktop comparison', 'electron', 'tauri', 'macos', '.net', 'asp.net'],
    description: 'Compare Electron, Tauri, native macOS, and .NET desktop development approaches.',
    searchableContent: `
        Desktop Framework Comparison
        Compare Electron, Tauri, macOS, .NET
    `.trim()
};

const performanceData = [
    { framework: 'Native macOS', score: 100 },
    { framework: '.NET / Windows', score: 95 },
    { framework: 'Tauri', score: 90 },
    { framework: 'Electron', score: 75 }
];

const devSpeedData = [
    { framework: 'Electron', speed: 9 },
    { framework: 'Tauri', speed: 8 },
    { framework: '.NET', speed: 7 },
    { framework: 'Native macOS', speed: 6 }
];

const learningCurveData = [
    { framework: 'Electron', difficulty: 3 },
    { framework: 'Tauri', difficulty: 4 },
    { framework: '.NET', difficulty: 5 },
    { framework: 'Native macOS', difficulty: 7 }
];

const ecosystemData = [
    { framework: '.NET', tools: 95 },
    { framework: 'Electron', tools: 90 },
    { framework: 'Native macOS', tools: 85 },
    { framework: 'Tauri', tools: 70 }
];

const radarData = [
    { subject: 'Performance', Electron: 70, Tauri: 85, Native: 100, DotNet: 95 },
    { subject: 'Dev Speed', Electron: 95, Tauri: 90, Native: 60, DotNet: 75 },
    { subject: 'Ecosystem', Electron: 90, Tauri: 70, Native: 85, DotNet: 95 },
    { subject: 'UI Control', Electron: 80, Tauri: 85, Native: 100, DotNet: 95 },
    { subject: 'Resource Usage', Electron: 60, Tauri: 90, Native: 100, DotNet: 85 }
];

export default function DesktopComparison() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Desktop Framework Comparison
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Compare Electron, Tauri, native macOS, and .NET approaches across performance, tooling, and development speed
            </p>

            <h2 id="overview" className="text-2xl font-semibold mt-12 mb-4">
                Overview
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:electron-framework" width="32" height="32" className="text-[#47848F]" />
                        <h3 className="font-semibold text-lg">Electron</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        Build desktop apps with web technologies. Large ecosystem, rapid development.
                    </p>
                </div>
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:alpha-t" width="32" height="32" className="text-[#4E9F50]" />
                        <h3 className="font-semibold text-lg">Tauri</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        Lightweight alternative built with Rust. Better performance and smaller bundles.
                    </p>
                </div>
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:apple" width="32" height="32" className="text-[#000]" />
                        <h3 className="font-semibold text-lg">Native macOS</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        Build macOS apps with SwiftUI/AppKit for best performance and user experience.
                    </p>
                </div>
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:microsoft" width="32" height="32" className="text-[#0078D4]" />
                        <h3 className="font-semibold text-lg">.NET / WinUI</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        Build native Windows apps with .NET, WPF, WinUI, or MAUI. Enterprise-ready tooling.
                    </p>
                </div>
            </div>

            <h2 id="performance" className="text-2xl font-semibold mt-12 mb-4">
                Performance
            </h2>

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

            <h2 id="dev-speed" className="text-2xl font-semibold mt-12 mb-4">
                Development Speed
            </h2>

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
                Ecosystem & Tooling
            </h2>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={ecosystemData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="framework" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="tools" fill="#4f46ff" />
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
                        <Radar name="Electron" dataKey="Electron" stroke="#47848F" fill="#47848F" fillOpacity={0.6} />
                        <Radar name="Tauri" dataKey="Tauri" stroke="#4E9F50" fill="#4E9F50" fillOpacity={0.6} />
                        <Radar name="Native macOS" dataKey="Native" stroke="#000" fill="#000" fillOpacity={0.2} />
                        <Radar name=".NET" dataKey="DotNet" stroke="#0078D4" fill="#0078D4" fillOpacity={0.4} />
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
                        <Icon icon="mdi:electron-framework" width="32" height="32" className="text-[#47848F]" />
                        <h3 className="font-semibold text-xl">Choose Electron When:</h3>
                    </div>
                    <ul className="space-y-2 text-[#4B5563]">
                        <li>• You have web developers on your team</li>
                        <li>• You want rapid development with HTML/CSS/JS</li>
                        <li>• You need cross-platform support with minimal friction</li>
                        <li>• Your app can tolerate higher memory usage</li>
                    </ul>
                </div>

                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:alpha-t" width="32" height="32" className="text-[#4E9F50]" />
                        <h3 className="font-semibold text-xl">Choose Tauri When:</h3>
                    </div>
                    <ul className="space-y-2 text-[#4B5563]">
                        <li>• You want web tech but better performance than Electron</li>
                        <li>• You need small bundle sizes</li>
                        <li>• You're comfortable with Rust or ready to learn</li>
                        <li>• You need modern security features</li>
                    </ul>
                </div>

                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:apple" width="32" height="32" className="text-[#000]" />
                        <h3 className="font-semibold text-xl">Choose Native macOS When:</h3>
                    </div>
                    <ul className="space-y-2 text-[#4B5563]">
                        <li>• You need deep integration with macOS</li>
                        <li>• You want the best performance and UI polish</li>
                        <li>• You're building macOS-only or Apple-first apps</li>
                        <li>• You need access to all macOS APIs</li>
                    </ul>
                </div>

                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:microsoft" width="32" height="32" className="text-[#0078D4]" />
                        <h3 className="font-semibold text-xl">Choose .NET / WinUI When:</h3>
                    </div>
                    <ul className="space-y-2 text-[#4B5563]">
                        <li>• You're targeting Windows or enterprise environments</li>
                        <li>• You need mature tooling and enterprise support</li>
                        <li>• You want to leverage ASP.NET services and Microsoft stack</li>
                        <li>• You need strong typing with C# and .NET ecosystem</li>
                    </ul>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">💡 Pro Tip</h3>
                <p className="text-[#4B5563] leading-relaxed">
                    Many teams combine approaches: use Electron or Tauri for cross-platform UI, connect to ASP.NET APIs for backend,
                    and build native modules for performance-critical features on Windows (.NET) or macOS (Swift).
                </p>
            </div>

            <div className="flex gap-4 mt-8">
                <button
                    onClick={() => navigate("/alldocs/desktop/electron")}
                    className="flex-1 px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Icon icon="mdi:electron-framework" width="24" height="24" className="text-[#47848F]" />
                    <span className="font-semibold">Learn Electron</span>
                </button>
                <button
                    onClick={() => navigate("/alldocs/desktop/dotnet")}
                    className="flex-1 px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Icon icon="mdi:microsoft" width="24" height="24" className="text-[#0078D4]" />
                    <span className="font-semibold">Learn .NET Desktop</span>
                </button>
            </div>
        </>
    )
}

