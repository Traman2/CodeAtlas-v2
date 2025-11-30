import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "overview", title: "Overview" },
    { id: "market-share", title: "Market Share" },
    { id: "service-comparison", title: "Service Comparison" },
    { id: "pricing", title: "Pricing Comparison" },
    { id: "comprehensive-comparison", title: "Comprehensive Comparison" },
    { id: "when-to-use", title: "When to Use Each Provider" }
]

export const metadata: GuideMetadata = {
    id: 'cloud-comparison',
    title: 'Cloud Provider Comparison',
    category: 'CLOUD',
    path: '/alldocs/cloud/comparison',
    keywords: ['comparison', 'aws', 'azure', 'gcp', 'google cloud', 'cloud providers', 'market share', 'pricing'],
    description: 'Comprehensive comparison of AWS, Azure, and GCP including market share, services, pricing, and use cases.',
    searchableContent: `
        Cloud Provider Comparison
        Compare AWS, Azure, and GCP
        Market share, services, pricing comparison
    `.trim()
};

// Market share data (approximate percentages)
const marketShareData = [
    { provider: 'AWS', share: 32, color: '#FF9900' },
    { provider: 'Azure', share: 23, color: '#0078D4' },
    { provider: 'GCP', share: 10, color: '#4285F4' },
    { provider: 'Others', share: 35, color: '#6b7280' }
];

// Number of services offered
const servicesData = [
    { provider: 'AWS', services: 200, color: '#FF9900' },
    { provider: 'Azure', services: 180, color: '#0078D4' },
    { provider: 'GCP', services: 100, color: '#4285F4' }
];

// Pricing comparison (relative cost, lower is better)
const pricingData = [
    { provider: 'AWS', cost: 100, color: '#FF9900' },
    { provider: 'Azure', cost: 105, color: '#0078D4' },
    { provider: 'GCP', cost: 95, color: '#4285F4' }
];

// Global regions available
const regionsData = [
    { provider: 'AWS', regions: 31, color: '#FF9900' },
    { provider: 'Azure', regions: 60, color: '#0078D4' },
    { provider: 'GCP', regions: 35, color: '#4285F4' }
];

// Radar chart data for comprehensive comparison
const radarData = [
    { subject: 'Market Share', AWS: 95, Azure: 70, GCP: 30 },
    { subject: 'Service Count', AWS: 100, Azure: 90, GCP: 50 },
    { subject: 'Enterprise Focus', AWS: 85, Azure: 95, GCP: 70 },
    { subject: 'AI/ML Services', AWS: 85, Azure: 80, GCP: 95 },
    { subject: 'Cost Efficiency', AWS: 80, Azure: 75, GCP: 90 },
    { subject: 'Ease of Use', AWS: 75, Azure: 85, GCP: 80 },
    { subject: 'Documentation', AWS: 90, Azure: 85, GCP: 80 }
];

export default function CloudComparison() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Cloud Provider Comparison
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Compare AWS, Azure, and GCP across market share, services, pricing, and use cases
            </p>

            <h2 id="overview" className="text-2xl font-semibold mt-12 mb-4">
                Overview
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                The cloud computing market is dominated by three major providers: Amazon Web Services (AWS), Microsoft 
                Azure, and Google Cloud Platform (GCP). Each has unique strengths and is suited for different use cases.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/cloud/aws")}
                    className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0] hover:border-[#FF9900] transition-all cursor-pointer"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:aws" width="32" height="32" className="text-[#FF9900]" />
                        <h3 className="font-semibold text-lg">AWS</h3>
                    </div>
                    <p className="text-sm text-[#4B5563] text-left">
                        Largest market share, most comprehensive service catalog, best for startups and enterprises
                    </p>
                </button>

                <button
                    onClick={() => navigate("/alldocs/cloud/azure")}
                    className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0] hover:border-[#0078D4] transition-all cursor-pointer"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:microsoft-azure" width="32" height="32" className="text-[#0078D4]" />
                        <h3 className="font-semibold text-lg">Azure</h3>
                    </div>
                    <p className="text-sm text-[#4B5563] text-left">
                        Strong enterprise integration, excellent for Microsoft shops, hybrid cloud solutions
                    </p>
                </button>

                <button
                    onClick={() => navigate("/alldocs/cloud/gcp")}
                    className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0] hover:border-[#4285F4] transition-all cursor-pointer"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Icon icon="mdi:google-cloud" width="32" height="32" className="text-[#4285F4]" />
                        <h3 className="font-semibold text-lg">GCP</h3>
                    </div>
                    <p className="text-sm text-[#4B5563] text-left">
                        Best for data analytics, AI/ML, Kubernetes, competitive pricing, strong in big data
                    </p>
                </button>
            </div>

            <h2 id="market-share" className="text-2xl font-semibold mt-12 mb-4">
                Market Share
            </h2>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Cloud Infrastructure Market Share (2024)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={marketShareData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="provider" />
                        <YAxis domain={[0, 40]} />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="share" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="service-comparison" className="text-2xl font-semibold mt-12 mb-4">
                Service Comparison
            </h2>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Number of Services Offered</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={servicesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="provider" />
                        <YAxis domain={[0, 250]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="services" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Global Regions Available</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={regionsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="provider" />
                        <YAxis domain={[0, 70]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="regions" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="pricing" className="text-2xl font-semibold mt-12 mb-4">
                Pricing Comparison
            </h2>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Relative Pricing (Lower is Better)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={pricingData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="provider" />
                        <YAxis domain={[90, 110]} />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="cost" fill="#4f46ff" />
                    </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-[#6b7280] mt-4">
                    Note: Actual pricing varies significantly by service and usage. GCP generally offers competitive 
                    pricing, especially for compute and data analytics workloads.
                </p>
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
                        <Radar name="AWS" dataKey="AWS" stroke="#FF9900" fill="#FF9900" fillOpacity={0.6} />
                        <Radar name="Azure" dataKey="Azure" stroke="#0078D4" fill="#0078D4" fillOpacity={0.6} />
                        <Radar name="GCP" dataKey="GCP" stroke="#4285F4" fill="#4285F4" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="when-to-use" className="text-2xl font-semibold mt-12 mb-4">
                When to Use Each Provider
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:aws" width="32" height="32" className="text-[#FF9900]" />
                        <h3 className="font-semibold text-lg">Choose AWS When:</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[#4B5563]">
                        <li>You need the broadest range of services and features</li>
                        <li>You're building a startup or new project (excellent free tier)</li>
                        <li>You need extensive documentation and community support</li>
                        <li>You want the largest ecosystem of third-party tools</li>
                        <li>You need global reach with many regions</li>
                    </ul>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:microsoft-azure" width="32" height="32" className="text-[#0078D4]" />
                        <h3 className="font-semibold text-lg">Choose Azure When:</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[#4B5563]">
                        <li>Your organization already uses Microsoft technologies (Office 365, Active Directory)</li>
                        <li>You need strong hybrid cloud capabilities</li>
                        <li>You're building enterprise applications with .NET</li>
                        <li>You need compliance certifications for regulated industries</li>
                        <li>You want tight integration with Microsoft development tools</li>
                    </ul>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon icon="mdi:google-cloud" width="32" height="32" className="text-[#4285F4]" />
                        <h3 className="font-semibold text-lg">Choose GCP When:</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-[#4B5563]">
                        <li>You're working with big data and analytics (BigQuery, Dataflow)</li>
                        <li>You need advanced AI/ML services (TensorFlow, Vertex AI)</li>
                        <li>You're using Kubernetes (GKE is considered best-in-class)</li>
                        <li>Cost optimization is a priority</li>
                        <li>You need strong data processing and machine learning capabilities</li>
                    </ul>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Multi-Cloud Strategy</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            Many organizations use multiple cloud providers to leverage the strengths of each. For example, 
                            you might use AWS for general compute, Azure for Microsoft integration, and GCP for data analytics. 
                            Tools like Terraform can help manage multi-cloud infrastructure.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/cloud/aws")}
                    className="px-6 py-4 bg-[#FF9900]/5 border border-[#FF9900] hover:bg-[#FF9900]/10 transition-all cursor-pointer"
                >
                    <Icon icon="mdi:aws" width="40" height="40" className="text-[#FF9900] mx-auto mb-2" />
                    <h3 className="font-semibold text-center">Learn AWS</h3>
                </button>

                <button
                    onClick={() => navigate("/alldocs/cloud/azure")}
                    className="px-6 py-4 bg-[#0078D4]/5 border border-[#0078D4] hover:bg-[#0078D4]/10 transition-all cursor-pointer"
                >
                    <Icon icon="mdi:microsoft-azure" width="40" height="40" className="text-[#0078D4] mx-auto mb-2" />
                    <h3 className="font-semibold text-center">Learn Azure</h3>
                </button>

                <button
                    onClick={() => navigate("/alldocs/cloud/gcp")}
                    className="px-6 py-4 bg-[#4285F4]/5 border border-[#4285F4] hover:bg-[#4285F4]/10 transition-all cursor-pointer"
                >
                    <Icon icon="mdi:google-cloud" width="40" height="40" className="text-[#4285F4] mx-auto mb-2" />
                    <h3 className="font-semibold text-center">Learn GCP</h3>
                </button>
            </div>
        </>
    )
}

