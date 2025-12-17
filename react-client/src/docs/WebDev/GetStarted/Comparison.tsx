import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import type { GuideMetadata } from '../../../types/GuideMetadata';
import ArticleFeedback from "@/components/ArticleFeedback";

export const sections = [
    { id: "overview", title: "Overview" },
    { id: "performance-comparison", title: "Performance Comparison" },
    { id: "bundle-size", title: "Bundle Size" },
    { id: "learning-curve", title: "Learning Curve" },
    { id: "ecosystem", title: "Ecosystem & Community" },
    { id: "when-to-use", title: "When to Use Each Framework" }
]

export const metadata: GuideMetadata = {
    id: 'webdev-comparison',
    title: 'Framework Comparison',
    category: 'WEBDEV',
    path: '/alldocs/webdev/comparison',
    keywords: ['comparison', 'react', 'vue', 'angular', 'performance', 'bundle size', 'learning curve', 'framework comparison'],
    description: 'Comprehensive comparison of React, Vue, and Angular frameworks including performance, bundle size, learning curve, and ecosystem.',
    searchableContent: `
        Framework Comparison
        Compare React, Vue, and Angular across multiple dimensions
        Performance, Bundle Size, Learning Curve, Ecosystem
    `.trim()
};

// Performance data (based on real-world benchmarks)
const performanceData = [
    { framework: 'React', score: 85, color: '#61DAFB' },
    { framework: 'Vue', score: 90, color: '#4FC08D' },
    { framework: 'Angular', score: 80, color: '#DD0031' }
];

// Bundle size data (in KB, gzipped)
const bundleSizeData = [
    { framework: 'React', size: 45, color: '#61DAFB' },
    { framework: 'Vue', size: 35, color: '#4FC08D' },
    { framework: 'Angular', size: 140, color: '#DD0031' }
];

// Learning curve data (1-10 scale, lower is easier)
const learningCurveData = [
    { framework: 'React', difficulty: 4, color: '#61DAFB' },
    { framework: 'Vue', difficulty: 3, color: '#4FC08D' },
    { framework: 'Angular', difficulty: 7, color: '#DD0031' }
];

// GitHub stars (in thousands, approximate)
const popularityData = [
    { framework: 'React', stars: 230, color: '#61DAFB' },
    { framework: 'Vue', stars: 220, color: '#4FC08D' },
    { framework: 'Angular', stars: 95, color: '#DD0031' }
];

// NPM downloads per week (in millions, approximate)
const npmDownloadsData = [
    { framework: 'React', downloads: 25, color: '#61DAFB' },
    { framework: 'Vue', downloads: 4, color: '#4FC08D' },
    { framework: 'Angular', downloads: 3, color: '#DD0031' }
];

// Radar chart data for comprehensive comparison
const radarData = [
    { subject: 'Performance', React: 85, Vue: 90, Angular: 80 },
    { subject: 'Ease of Learning', React: 60, Vue: 80, Angular: 40 },
    { subject: 'Ecosystem', React: 95, Vue: 70, Angular: 85 },
    { subject: 'Documentation', React: 85, Vue: 95, Angular: 80 },
    { subject: 'Type Safety', React: 70, Vue: 75, Angular: 95 },
    { subject: 'Bundle Size', React: 80, Vue: 90, Angular: 50 }
];

export default function WebDevComparison() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Framework Comparison
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Compare React, Vue, and Angular across performance, bundle size, learning curve, and more
            </p>

            <h2 id="overview" className="text-2xl font-semibold mt-12 mb-4">
                Overview
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Choosing the right framework for your project can be challenging. Each framework has its strengths and
                weaknesses. This comparison will help you understand the differences and make an informed decision.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:react" width="32" height="32" className="text-[#61DAFB]" />
                        <h3 className="font-semibold text-lg">React</h3>
                    </div>
                    <p className="text-sm text-[#6b7280]">
                        JavaScript library for building user interfaces. Most popular with the largest ecosystem.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:vuejs" width="32" height="32" className="text-[#4FC08D]" />
                        <h3 className="font-semibold text-lg">Vue</h3>
                    </div>
                    <p className="text-sm text-[#6b7280]">
                        Progressive framework with gentle learning curve. Excellent documentation and developer experience.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:angular" width="32" height="32" className="text-[#DD0031]" />
                        <h3 className="font-semibold text-lg">Angular</h3>
                    </div>
                    <p className="text-sm text-[#6b7280]">
                        Full-featured platform with TypeScript. Best for large enterprise applications.
                    </p>
                </div>
            </div>

            <h2 id="performance-comparison" className="text-2xl font-semibold mt-12 mb-4">
                Performance Comparison
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Performance is measured based on runtime speed, rendering efficiency, and optimization capabilities.
                All three frameworks are fast, but they achieve performance through different approaches.
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
                    <li>• <strong>Vue:</strong> Excellent performance with its reactivity system and optimized rendering</li>
                    <li>• <strong>React:</strong> Very good performance, especially with React 18+ concurrent features</li>
                    <li>• <strong>Angular:</strong> Good performance with ahead-of-time compilation and tree-shaking</li>
                </ul>
            </div>

            <h2 id="bundle-size" className="text-2xl font-semibold mt-12 mb-4">
                Bundle Size Comparison
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Bundle size affects initial load time and user experience. Smaller bundles mean faster page loads,
                especially on slower connections.
            </p>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={bundleSizeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="framework" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value} KB (gzipped)`} />
                        <Legend />
                        <Bar dataKey="size" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="px-4 py-3 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <p className="text-sm text-[#6b7280] mb-1">React</p>
                    <p className="text-2xl font-semibold text-[#61DAFB]">45 KB</p>
                    <p className="text-xs text-[#6b7280]">gzipped</p>
                </div>
                <div className="px-4 py-3 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <p className="text-sm text-[#6b7280] mb-1">Vue</p>
                    <p className="text-2xl font-semibold text-[#4FC08D]">35 KB</p>
                    <p className="text-xs text-[#6b7280]">gzipped</p>
                </div>
                <div className="px-4 py-3 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <p className="text-sm text-[#6b7280] mb-1">Angular</p>
                    <p className="text-2xl font-semibold text-[#DD0031]">140 KB</p>
                    <p className="text-xs text-[#6b7280]">gzipped</p>
                </div>
            </div>

            <h2 id="learning-curve" className="text-2xl font-semibold mt-12 mb-4">
                Learning Curve
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                How easy is it to get started with each framework? This metric considers initial setup, documentation
                quality, and conceptual complexity.
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

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:vuejs" width="24" height="24" className="text-[#4FC08D]" />
                        <h3 className="font-semibold">Vue - Easiest to Learn</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        Vue has the gentlest learning curve. Its template syntax is intuitive, and the documentation
                        is excellent. You can start using Vue with just HTML, CSS, and JavaScript knowledge.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:react" width="24" height="24" className="text-[#61DAFB]" />
                        <h3 className="font-semibold">React - Moderate Learning Curve</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        React requires understanding JSX, components, and hooks. The learning curve is moderate, but
                        the large community and abundance of resources make it easier to find help.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:angular" width="24" height="24" className="text-[#DD0031]" />
                        <h3 className="font-semibold">Angular - Steeper Learning Curve</h3>
                    </div>
                    <p className="text-sm text-[#4B5563]">
                        Angular has the steepest learning curve due to its comprehensive nature. You need to learn
                        TypeScript, dependency injection, modules, and more. However, it provides more structure
                        for large teams.
                    </p>
                </div>
            </div>

            <h2 id="ecosystem" className="text-2xl font-semibold mt-12 mb-4">
                Ecosystem & Community
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                A strong ecosystem means more libraries, tools, and community support. This affects how quickly
                you can find solutions to problems and hire developers.
            </p>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={popularityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="framework" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value}k GitHub stars`} />
                        <Legend />
                        <Bar dataKey="stars" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">NPM Weekly Downloads (Millions)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={npmDownloadsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="framework" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value}M downloads/week`} />
                        <Legend />
                        <Bar dataKey="downloads" fill="#4f46ff" />
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
                        <Radar name="React" dataKey="React" stroke="#61DAFB" fill="#61DAFB" fillOpacity={0.6} />
                        <Radar name="Vue" dataKey="Vue" stroke="#4FC08D" fill="#4FC08D" fillOpacity={0.6} />
                        <Radar name="Angular" dataKey="Angular" stroke="#DD0031" fill="#DD0031" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="when-to-use" className="text-2xl font-semibold mt-12 mb-4">
                When to Use Each Framework
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:react" width="32" height="32" className="text-[#61DAFB]" />
                        <h3 className="font-semibold text-xl">Choose React When:</h3>
                    </div>
                    <ul className="space-y-2 text-[#4B5563]">
                        <li>• You want the largest ecosystem and most job opportunities</li>
                        <li>• You need flexibility in choosing libraries and tools</li>
                        <li>• You're building a large application with many developers</li>
                        <li>• You want to use React Native for mobile development</li>
                        <li>• You prefer a library over a full framework</li>
                    </ul>
                </div>

                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:vuejs" width="32" height="32" className="text-[#4FC08D]" />
                        <h3 className="font-semibold text-xl">Choose Vue When:</h3>
                    </div>
                    <ul className="space-y-2 text-[#4B5563]">
                        <li>• You're new to frontend frameworks and want an easy start</li>
                        <li>• You need excellent documentation and developer experience</li>
                        <li>• You want a progressive framework that scales with your needs</li>
                        <li>• You prefer a template-based approach with optional JSX</li>
                        <li>• You're building a small to medium-sized application</li>
                    </ul>
                </div>

                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:angular" width="32" height="32" className="text-[#DD0031]" />
                        <h3 className="font-semibold text-xl">Choose Angular When:</h3>
                    </div>
                    <ul className="space-y-2 text-[#4B5563]">
                        <li>• You're building large enterprise applications</li>
                        <li>• You need a complete solution with built-in tools</li>
                        <li>• You want strong TypeScript support out of the box</li>
                        <li>• You prefer opinionated structure for team consistency</li>
                        <li>• You need features like dependency injection and modules</li>
                    </ul>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">💡 Pro Tip</h3>
                <p className="text-[#4B5563] leading-relaxed">
                    Don't overthink your choice! All three frameworks are excellent and can build any application.
                    The best framework is the one you and your team are most comfortable with. You can always learn
                    another framework later—the concepts transfer well between them.
                </p>
            </div>

            <div className="flex gap-4 mt-8">
                <button
                    onClick={() => navigate("/alldocs/webdev/react")}
                    className="flex-1 px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Icon icon="mdi:react" width="24" height="24" className="text-[#61DAFB]" />
                    <span className="font-semibold">Learn React</span>
                </button>
                <button
                    onClick={() => navigate("/alldocs/webdev/vue")}
                    className="flex-1 px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Icon icon="mdi:vuejs" width="24" height="24" className="text-[#4FC08D]" />
                    <span className="font-semibold">Learn Vue</span>
                </button>
                <button
                    onClick={() => navigate("/alldocs/webdev/angular")}
                    className="flex-1 px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Icon icon="mdi:angular" width="24" height="24" className="text-[#DD0031]" />
                    <span className="font-semibold">Learn Angular</span>
                </button>
            </div>

            <div className="mt-36"/>
            <ArticleFeedback articleId="/alldocs/webdev/comparison"/>

            <div className="gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/webdev/overview")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/webdev/react")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:react" width="40" height="40" className="text-[#61DAFB]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Frameworks - React</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

