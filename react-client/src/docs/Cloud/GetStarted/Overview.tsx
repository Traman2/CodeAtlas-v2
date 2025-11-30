import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-cloud", title: "What is Cloud Computing?" },
    { id: "cloud-providers", title: "Major Cloud Providers" },
    { id: "cloud-services", title: "Cloud Services & Technologies" },
    { id: "getting-started", title: "Getting Started" }
]

export const metadata: GuideMetadata = {
    id: 'cloud-overview',
    title: 'Cloud Computing Overview',
    category: 'CLOUD',
    path: '/alldocs/cloud/overview',
    keywords: ['cloud computing', 'overview', 'aws', 'azure', 'gcp', 'google cloud', 'infrastructure', 'serverless'],
    description: 'Introduction to cloud computing and overview of major cloud providers including AWS, Azure, and Google Cloud Platform.',
    searchableContent: `
        Cloud Computing Overview
        Introduction to cloud computing platforms
        AWS, Azure, Google Cloud Platform
        Infrastructure as a Service, Platform as a Service, Software as a Service
    `.trim()
};

export default function CloudOverview() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Cloud Computing Overview
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Your comprehensive guide to cloud computing platforms and services for deploying, scaling, and managing applications
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:cloud" className="w-70 h-70 text-[#1d1884]"/>
            </div>

            <h2 id="what-is-cloud" className="text-2xl font-semibold mt-12 mb-4">
                What is Cloud Computing?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Cloud computing is the delivery of computing services—including servers, storage, databases, networking, 
                software, analytics, and intelligence—over the Internet ("the cloud") to offer faster innovation, flexible 
                resources, and economies of scale.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Instead of owning and maintaining physical data centers and servers, you can access technology services, 
                such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon 
                Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP).
            </p>

            <h2 id="cloud-providers" className="text-2xl font-semibold mt-12 mb-4">
                Major Cloud Providers
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                The cloud computing market is dominated by three major providers, each offering comprehensive platforms 
                with unique strengths:
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
                <button 
                    onClick={() => navigate("/alldocs/cloud/aws")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:aws" width="40" height="40" className="text-[#FF9900] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Amazon Web Services (AWS)</h3>
                        <p className="text-[#7b7f85] text-left">
                            The most comprehensive and widely-adopted cloud platform. AWS offers over 200 fully-featured 
                            services from data centers globally. Perfect for enterprises and startups alike.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/cloud/azure")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:microsoft-azure" width="40" height="40" className="text-[#0078D4] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Microsoft Azure</h3>
                        <p className="text-[#7b7f85] text-left">
                            Enterprise-focused cloud platform with deep integration into Microsoft ecosystem. Excellent 
                            for organizations already using Microsoft technologies like Office 365, Active Directory, and .NET.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/cloud/gcp")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:google-cloud" width="40" height="40" className="text-[#4285F4] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Google Cloud Platform (GCP)</h3>
                        <p className="text-[#7b7f85] text-left">
                            Google's cloud platform known for data analytics, machine learning, and Kubernetes. Strong 
                            in big data processing and AI/ML workloads with competitive pricing.
                        </p>
                    </div>
                </button>
            </div>

            <h2 id="cloud-services" className="text-2xl font-semibold mt-12 mb-4">
                Cloud Services & Technologies
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Modern cloud platforms offer a wide range of services organized into categories:
            </p>

            <div className="space-y-6 mt-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Compute Services</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Virtual machines, containers, serverless functions, and managed compute services. Examples: 
                            EC2, Azure VMs, Cloud Run, Lambda, Azure Functions, Cloud Functions.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Storage Services</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Object storage, block storage, file storage, and archival storage. Examples: S3, Azure Blob 
                            Storage, Cloud Storage, EBS, Azure Disks.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Database Services</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Managed relational and NoSQL databases, data warehousing, and caching. Examples: RDS, 
                            Azure SQL Database, Cloud SQL, DynamoDB, Cosmos DB, Firestore.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Networking</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Virtual networks, load balancers, CDN, DNS, and VPN services. Examples: VPC, Virtual Network, 
                            Cloud Load Balancing, CloudFront, Azure Front Door.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        5
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Infrastructure as Code</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Tools for managing cloud infrastructure programmatically. Examples: Terraform, CloudFormation, 
                            Azure Resource Manager, Deployment Manager.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Ready to dive into cloud computing? Here's a recommended learning path:
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-6">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Recommended Learning Path</h3>
                        <ol className="space-y-2 text-[#4B5563]">
                            <li className="leading-relaxed">
                                <strong>1. Compare Providers:</strong> Review the cloud provider comparison to understand 
                                the differences between AWS, Azure, and GCP. This will help you choose which platform 
                                to learn first.
                            </li>
                            <li className="leading-relaxed">
                                <strong>2. Choose a Provider:</strong> Start with one cloud provider. AWS has the largest 
                                market share and most comprehensive documentation, making it a great starting point.
                            </li>
                            <li className="leading-relaxed">
                                <strong>3. Set Up Your Account:</strong> Create a free tier account and explore the console. 
                                Most providers offer free credits for new users.
                            </li>
                            <li className="leading-relaxed">
                                <strong>4. Learn Core Services:</strong> Start with compute (EC2/VMs), storage (S3/Blob), 
                                and networking (VPC/Virtual Network) services.
                            </li>
                            <li className="leading-relaxed">
                                <strong>5. Explore Infrastructure as Code:</strong> Learn Terraform or CloudFormation to 
                                manage infrastructure programmatically.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/cloud/comparison")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:chart-bar" width="32" height="32" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Provider Comparison</h3>
                            <p className="text-[#6b7280] text-sm text-left">Compare AWS, Azure, and GCP</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={() => navigate("/alldocs/cloud/aws")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:aws" width="32" height="32" className="text-[#FF9900]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Start with AWS</h3>
                            <p className="text-[#6b7280] text-sm text-left">Learn the most popular platform</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <p className="mt-8 mb-8 leading-relaxed text-[#6b7280]">
                Remember: Cloud computing is a journey. Start with one provider, master the fundamentals, and then 
                explore others to understand different approaches. Each platform has its strengths—choose based on your 
                needs, existing technology stack, and career goals. Happy cloud computing! ☁️
            </p>
        </>
    )
}

