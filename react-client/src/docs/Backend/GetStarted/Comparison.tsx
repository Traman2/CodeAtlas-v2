import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "overview", title: "Overview" },
    { id: "performance-comparison", title: "Performance Comparison" },
    { id: "learning-curve", title: "Learning Curve" },
    { id: "ecosystem", title: "Ecosystem & Community" },
    { id: "comprehensive-comparison", title: "Comprehensive Comparison" },
    { id: "when-to-use", title: "When to Use Each Framework" }
]

export const metadata: GuideMetadata = {
    id: 'backend-comparison',
    title: 'Backend Framework Comparison',
    category: 'BACKEND',
    path: '/alldocs/backend/comparison',
    keywords: ['comparison', 'express', 'fastapi', 'django', 'flask', 'spring boot', 'backend frameworks', 'api frameworks'],
    description: 'Comprehensive comparison of backend frameworks including Express, FastAPI, Django, Flask, and Spring Boot.',
    searchableContent: `
        Backend Framework Comparison
        Compare Express FastAPI Django Flask Spring Boot
        Performance learning curve ecosystem
    `.trim()
};

// Performance data (requests per second, approximate)
const performanceData = [
    { framework: 'Express', score: 15000, color: '#339933' },
    { framework: 'FastAPI', score: 20000, color: '#009688' },
    { framework: 'Django', score: 5000, color: '#092E20' },
    { framework: 'Flask', score: 8000, color: '#000000' },
    { framework: 'Spring Boot', score: 12000, color: '#6DB33F' }
];

// Learning curve data (1-10 scale, lower is easier)
const learningCurveData = [
    { framework: 'Express', difficulty: 3, color: '#339933' },
    { framework: 'FastAPI', difficulty: 4, color: '#009688' },
    { framework: 'Django', difficulty: 6, color: '#092E20' },
    { framework: 'Flask', difficulty: 3, color: '#000000' },
    { framework: 'Spring Boot', difficulty: 7, color: '#6DB33F' }
];

// GitHub stars (in thousands, approximate)
const popularityData = [
    { framework: 'Express', stars: 65, color: '#339933' },
    { framework: 'FastAPI', stars: 70, color: '#009688' },
    { framework: 'Django', stars: 75, color: '#092E20' },
    { framework: 'Flask', stars: 65, color: '#000000' },
    { framework: 'Spring Boot', stars: 70, color: '#6DB33F' }
];

// Radar chart data for comprehensive comparison
const radarData = [
    { subject: 'Performance', Express: 85, FastAPI: 95, Django: 50, Flask: 70, SpringBoot: 80 },
    { subject: 'Ease of Learning', Express: 90, FastAPI: 80, Django: 60, Flask: 90, SpringBoot: 50 },
    { subject: 'Ecosystem', Express: 95, FastAPI: 70, Django: 90, Flask: 85, SpringBoot: 95 },
    { subject: 'Documentation', Express: 85, FastAPI: 90, Django: 95, Flask: 80, SpringBoot: 85 },
    { subject: 'Type Safety', Express: 60, FastAPI: 95, Django: 70, Flask: 60, SpringBoot: 95 },
    { subject: 'Enterprise Features', Express: 70, FastAPI: 75, Django: 85, Flask: 60, SpringBoot: 100 }
];

export default function BackendComparison() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Backend Framework Comparison
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Compare Express, FastAPI, Django, Flask, and Spring Boot across performance, learning curve, and ecosystem
            </p>

            <h2 id="overview" className="text-2xl font-semibold mt-12 mb-4">
                Overview
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Choosing the right backend framework depends on your project requirements, team expertise, and performance 
                needs. Each framework has its strengths and is suited for different use cases.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/backend/express")}
                    className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0] hover:border-[#339933] transition-all cursor-pointer"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:nodejs" width="32" height="32" className="text-[#339933]" />
                        <h3 className="font-semibold text-lg">Express</h3>
                    </div>
                    <p className="text-sm text-[#4B5563] text-left">
                        Minimal Node.js framework, great for APIs
                    </p>
                </button>

                <button
                    onClick={() => navigate("/alldocs/backend/fastapi")}
                    className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0] hover:border-[#009688] transition-all cursor-pointer"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:language-python" width="32" height="32" className="text-[#3776AB]" />
                        <h3 className="font-semibold text-lg">FastAPI</h3>
                    </div>
                    <p className="text-sm text-[#4B5563] text-left">
                        Modern Python API framework, high performance
                    </p>
                </button>

                <button
                    onClick={() => navigate("/alldocs/backend/django")}
                    className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0] hover:border-[#092E20] transition-all cursor-pointer"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:language-python" width="32" height="32" className="text-[#3776AB]" />
                        <h3 className="font-semibold text-lg">Django</h3>
                    </div>
                    <p className="text-sm text-[#4B5563] text-left">
                        Full-featured Python framework
                    </p>
                </button>

                <button
                    onClick={() => navigate("/alldocs/backend/flask")}
                    className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0] hover:border-[#000000] transition-all cursor-pointer"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:language-python" width="32" height="32" className="text-[#3776AB]" />
                        <h3 className="font-semibold text-lg">Flask</h3>
                    </div>
                    <p className="text-sm text-[#4B5563] text-left">
                        Lightweight Python framework
                    </p>
                </button>

                <button
                    onClick={() => navigate("/alldocs/backend/springboot")}
                    className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0] hover:border-[#6DB33F] transition-all cursor-pointer"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:language-java" width="32" height="32" className="text-[#ED8B00]" />
                        <h3 className="font-semibold text-lg">Spring Boot</h3>
                    </div>
                    <p className="text-sm text-[#4B5563] text-left">
                        Enterprise Java framework
                    </p>
                </button>
            </div>

            <h2 id="performance-comparison" className="text-2xl font-semibold mt-12 mb-4">
                Performance Comparison
            </h2>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Requests Per Second (Approximate)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="framework" />
                        <YAxis domain={[0, 25000]} />
                        <Tooltip formatter={(value) => `${value} req/s`} />
                        <Legend />
                        <Bar dataKey="score" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="learning-curve" className="text-2xl font-semibold mt-12 mb-4">
                Learning Curve
            </h2>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Ease of Learning (Lower is Easier)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={learningCurveData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="framework" />
                        <YAxis domain={[0, 10]} reversed />
                        <Tooltip formatter={(value) => `${value}/10`} />
                        <Legend />
                        <Bar dataKey="difficulty" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="ecosystem" className="text-2xl font-semibold mt-12 mb-4">
                Ecosystem & Community
            </h2>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">GitHub Stars (Thousands)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={popularityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="framework" />
                        <YAxis domain={[0, 80]} />
                        <Tooltip formatter={(value) => `${value}k stars`} />
                        <Legend />
                        <Bar dataKey="stars" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="comprehensive-comparison" className="text-2xl font-semibold mt-12 mb-4">
                Comprehensive Comparison
            </h2>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Multi-Dimensional Comparison</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} />
                        <Radar name="Express" dataKey="Express" stroke="#339933" fill="#339933" fillOpacity={0.6} />
                        <Radar name="FastAPI" dataKey="FastAPI" stroke="#009688" fill="#009688" fillOpacity={0.6} />
                        <Radar name="Django" dataKey="Django" stroke="#092E20" fill="#092E20" fillOpacity={0.6} />
                        <Radar name="Flask" dataKey="Flask" stroke="#000000" fill="#000000" fillOpacity={0.6} />
                        <Radar name="Spring Boot" dataKey="SpringBoot" stroke="#6DB33F" fill="#6DB33F" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="when-to-use" className="text-2xl font-semibold mt-12 mb-4">
                When to Use Each Framework
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:nodejs" width="32" height="32" className="text-[#339933]" />
                        <h3 className="font-semibold text-lg">Choose Express When:</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[#4B5563]">
                        <li>You're building REST APIs or microservices</li>
                        <li>Your team knows JavaScript/TypeScript</li>
                        <li>You want a minimal, flexible framework</li>
                        <li>You need real-time features (WebSockets)</li>
                        <li>You want to share code between frontend and backend</li>
                    </ul>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:language-python" width="32" height="32" className="text-[#3776AB]" />
                        <h3 className="font-semibold text-lg">Choose FastAPI When:</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[#4B5563]">
                        <li>You need high-performance APIs</li>
                        <li>You want automatic API documentation</li>
                        <li>You prefer type hints and modern Python</li>
                        <li>You're building microservices</li>
                        <li>You need async/await support</li>
                    </ul>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:language-python" width="32" height="32" className="text-[#3776AB]" />
                        <h3 className="font-semibold text-lg">Choose Django When:</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[#4B5563]">
                        <li>You're building a full-stack web application</li>
                        <li>You need an admin panel out of the box</li>
                        <li>You want built-in authentication and ORM</li>
                        <li>You prefer convention over configuration</li>
                        <li>You're building content management systems</li>
                    </ul>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:language-python" width="32" height="32" className="text-[#3776AB]" />
                        <h3 className="font-semibold text-lg">Choose Flask When:</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[#4B5563]">
                        <li>You want a lightweight, flexible framework</li>
                        <li>You prefer explicit control over your app structure</li>
                        <li>You're building small to medium applications</li>
                        <li>You want to choose your own libraries</li>
                        <li>You're learning Python web development</li>
                    </ul>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:language-java" width="32" height="32" className="text-[#ED8B00]" />
                        <h3 className="font-semibold text-lg">Choose Spring Boot When:</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[#4B5563]">
                        <li>You're building enterprise applications</li>
                        <li>You need robust security and transaction management</li>
                        <li>You're working in a Java/Kotlin environment</li>
                        <li>You need extensive integration with enterprise systems</li>
                        <li>You want production-ready features out of the box</li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/backend/express")}
                    className="px-6 py-4 bg-[#339933]/5 border border-[#339933] hover:bg-[#339933]/10 transition-all cursor-pointer"
                >
                    <Icon icon="mdi:nodejs" width="40" height="40" className="text-[#339933] mx-auto mb-2" />
                    <h3 className="font-semibold text-center">Learn Express</h3>
                </button>

                <button
                    onClick={() => navigate("/alldocs/backend/fastapi")}
                    className="px-6 py-4 bg-[#009688]/5 border border-[#009688] hover:bg-[#009688]/10 transition-all cursor-pointer"
                >
                    <Icon icon="mdi:language-python" width="40" height="40" className="text-[#3776AB] mx-auto mb-2" />
                    <h3 className="font-semibold text-center">Learn FastAPI</h3>
                </button>

                <button
                    onClick={() => navigate("/alldocs/backend/django")}
                    className="px-6 py-4 bg-[#092E20]/5 border border-[#092E20] hover:bg-[#092E20]/10 transition-all cursor-pointer"
                >
                    <Icon icon="mdi:language-python" width="40" height="40" className="text-[#3776AB] mx-auto mb-2" />
                    <h3 className="font-semibold text-center">Learn Django</h3>
                </button>

                <button
                    onClick={() => navigate("/alldocs/backend/flask")}
                    className="px-6 py-4 bg-[#000000]/5 border border-[#000000] hover:bg-[#000000]/10 transition-all cursor-pointer"
                >
                    <Icon icon="mdi:language-python" width="40" height="40" className="text-[#3776AB] mx-auto mb-2" />
                    <h3 className="font-semibold text-center">Learn Flask</h3>
                </button>

                <button
                    onClick={() => navigate("/alldocs/backend/springboot")}
                    className="px-6 py-4 bg-[#6DB33F]/5 border border-[#6DB33F] hover:bg-[#6DB33F]/10 transition-all cursor-pointer"
                >
                    <Icon icon="mdi:language-java" width="40" height="40" className="text-[#ED8B00] mx-auto mb-2" />
                    <h3 className="font-semibold text-center">Learn Spring Boot</h3>
                </button>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/backend/overview")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/backend/express")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:nodejs" width="40" height="40" className="text-[#339933]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Frameworks - Express</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

