import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "major-cloud-providers", title: "Major Cloud Providers" },
    { id: "cloud-technologies", title: "Cloud Technologies" }
]

export const metadata: GuideMetadata = {
    id: 'cloud',
    title: 'Cloud Services',
    category: 'WELCOME',
    path: '/alldocs/welcome/cloud',
    keywords: ['cloud', 'aws', 'azure', 'gcp', 'google cloud', 'hosting', 'serverless', 'lambda', 'kubernetes', 'terraform'],
    description: 'Learn about cloud platforms and services for deploying and scaling your applications. Explore infrastructure as code, serverless computing, and cloud-native architectures.',
    searchableContent: `
        Cloud Services
        Learn about cloud platforms and services for deploying and scaling your applications. Explore infrastructure as code, serverless computing, and cloud-native architectures.
        Major Cloud Providers
        Amazon Web Services (AWS)
        The most comprehensive cloud platform. Learn about EC2, S3, Lambda, RDS, and other essential AWS services for building scalable applications.
        Google Cloud Platform (GCP)
        Google's cloud computing services. Explore Compute Engine, Cloud Storage, BigQuery, and Kubernetes Engine for modern applications.
        Microsoft Azure
        Enterprise cloud platform from Microsoft. Discover Azure App Service, Azure Functions, and integration with Microsoft ecosystem.
        Cloud Technologies
        Serverless computing with Lambda and Cloud Functions
        Container orchestration with Kubernetes
        Infrastructure as Code with Terraform and CloudFormation
        Cloud databases and storage solutions
        Monitoring and logging with CloudWatch and Stackdriver
    `.trim()
};

export default function CloudDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">APP LOGIC</p>
            <h1 className="text-3xl font-semibold mt-2">Cloud Services</h1>
            <p className="mt-2">
                Learn about cloud platforms and services for deploying and scaling your
                applications. Explore infrastructure as code, serverless computing, and
                cloud-native architectures.
            </p>

            <h2 id="major-cloud-providers" className="text-2xl font-semibold mt-8 mb-4">Major Cloud Providers</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Amazon Web Services (AWS)</h3>
                    <p className="mt-2 text-gray-700">
                        The most comprehensive cloud platform. Learn about EC2, S3, Lambda,
                        RDS, and other essential AWS services for building scalable applications.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Google Cloud Platform (GCP)</h3>
                    <p className="mt-2 text-gray-700">
                        Google's cloud computing services. Explore Compute Engine, Cloud Storage,
                        BigQuery, and Kubernetes Engine for modern applications.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Microsoft Azure</h3>
                    <p className="mt-2 text-gray-700">
                        Enterprise cloud platform from Microsoft. Discover Azure App Service,
                        Azure Functions, and integration with Microsoft ecosystem.
                    </p>
                </div>
            </div>

            <h2 id="cloud-technologies" className="text-2xl font-semibold mt-8 mb-4">Cloud Technologies</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>Serverless computing with Lambda and Cloud Functions</li>
                <li>Container orchestration with Kubernetes</li>
                <li>Infrastructure as Code with Terraform and CloudFormation</li>
                <li>Cloud databases and storage solutions</li>
                <li>Monitoring and logging with CloudWatch and Stackdriver</li>
            </ul>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/welcome/desktop")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/welcome/backend")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:server" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">App Logic - Backend</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}
