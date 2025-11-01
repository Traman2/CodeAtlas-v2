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
        APP LOGIC
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
        </>
    )
}
