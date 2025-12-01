import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-gcp", title: "What is GCP?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "core-services", title: "Core Services" },
    { id: "data-analytics", title: "Data Analytics & AI/ML" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'cloud-gcp',
    title: 'Google Cloud Platform (GCP)',
    category: 'CLOUD',
    path: '/alldocs/cloud/gcp',
    keywords: ['gcp', 'google cloud', 'google cloud platform', 'bigquery', 'kubernetes', 'ai ml', 'data analytics'],
    description: 'Complete guide to Google Cloud Platform including Compute Engine, BigQuery, Kubernetes Engine, and AI/ML services.',
    searchableContent: `
        Google Cloud Platform GCP
        BigQuery Kubernetes AI ML
        Data analytics cloud
    `.trim()
};

const gcpSetup = `
# Install Google Cloud SDK
# macOS
brew install --cask google-cloud-sdk

# Linux
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

# Initialize gcloud
gcloud init

# Set default project
gcloud config set project PROJECT_ID

# Authenticate
gcloud auth login
`;

const computeExample = `
# Create a VM instance
gcloud compute instances create my-instance \\
    --zone=us-central1-a \\
    --machine-type=e2-medium \\
    --image-family=ubuntu-2204-lts \\
    --image-project=ubuntu-os-cloud

# List instances
gcloud compute instances list

# SSH into instance
gcloud compute ssh my-instance --zone=us-central1-a

# Delete instance
gcloud compute instances delete my-instance --zone=us-central1-a
`;

const bigqueryExample = `
# Create a dataset
bq mk --dataset --location=US my_dataset

# Create a table from CSV
bq load --source_format=CSV \\
    my_dataset.my_table \\
    gs://my-bucket/data.csv \\
    schema.json

# Query data
bq query --use_legacy_sql=false \\
    'SELECT * FROM \`my_dataset.my_table\` LIMIT 10'
`;

const gkeExample = `
# Create a GKE cluster
gcloud container clusters create my-cluster \\
    --num-nodes=3 \\
    --zone=us-central1-a \\
    --machine-type=e2-medium

# Get cluster credentials
gcloud container clusters get-credentials my-cluster \\
    --zone=us-central1-a

# Deploy an application
kubectl create deployment my-app --image=gcr.io/my-project/my-app
kubectl expose deployment my-app --type=LoadBalancer --port=80
`;

export default function GCPDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">CLOUD PROVIDERS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Google Cloud Platform (GCP)
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Google's cloud platform known for data analytics, machine learning, and Kubernetes with competitive pricing
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:google-cloud" className="w-70 h-70 text-[#4285F4]"/>
            </div>

            <h2 id="what-is-gcp" className="text-2xl font-semibold mt-12 mb-4">
                What is GCP?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure 
                that Google uses internally for its end-user products. Launched in 2008, GCP has grown to be a major player 
                in the cloud computing market.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                GCP is particularly strong in data analytics, machine learning, and container orchestration. It offers 
                competitive pricing and is known for its innovation in AI/ML services and big data processing.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Choose GCP?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Data Analytics:</strong> Best-in-class big data and analytics services (BigQuery, Dataflow)</li>
                            <li>• <strong>AI/ML:</strong> Advanced machine learning services with TensorFlow and Vertex AI</li>
                            <li>• <strong>Kubernetes:</strong> Google Kubernetes Engine (GKE) is considered best-in-class</li>
                            <li>• <strong>Competitive Pricing:</strong> Often more cost-effective, especially for compute and data workloads</li>
                            <li>• <strong>Innovation:</strong> Cutting-edge services in AI, ML, and data processing</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                To get started with GCP, create a free account and install the Google Cloud SDK:
            </p>

            <div className="mb-6">
                <CodeBlock code={gcpSetup} language="bash" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">GCP Free Tier</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            GCP offers a free tier with:
                        </p>
                        <ul className="mt-2 space-y-1 text-[#4B5563]">
                            <li>• $300 credit for 90 days</li>
                            <li>• Always free services (Compute Engine, Cloud Storage, etc.)</li>
                            <li>• Free tier limits for many services</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="core-services" className="text-2xl font-semibold mt-12 mb-4">
                Core Services
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-4">Compute Engine</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                Virtual machines running on Google's infrastructure. Choose from various machine types and operating systems.
            </p>

            <div className="mb-6">
                <CodeBlock code={computeExample} language="bash" />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Google Kubernetes Engine (GKE)</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                Managed Kubernetes service. GKE is considered one of the best Kubernetes offerings, as Kubernetes was 
                originally created by Google. See our <button onClick={() => navigate("/alldocs/cloud/kubernetes")} className="text-[#554DE2] hover:underline">Kubernetes guide</button> for more.
            </p>

            <div className="mb-6">
                <CodeBlock code={gkeExample} language="bash" />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Cloud Storage</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                Object storage with multiple storage classes (Standard, Nearline, Coldline, Archive) for different 
                access patterns and cost optimization.
            </p>

            <h2 id="data-analytics" className="text-2xl font-semibold mt-12 mb-4">
                Data Analytics & AI/ML
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-4">BigQuery</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                Serverless, highly scalable data warehouse for analytics. Query petabytes of data in seconds using SQL. 
                Perfect for data analytics workloads. See our <button onClick={() => navigate("/alldocs/dataanalytics/overview")} className="text-[#554DE2] hover:underline">Data Analytics guide</button> for more.
            </p>

            <div className="mb-6">
                <CodeBlock code={bigqueryExample} language="bash" />
            </div>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Vertex AI</h3>
                    <p className="text-[#4B5563]">
                        Unified ML platform for building, deploying, and managing machine learning models. Supports 
                        AutoML and custom model training. See our <button onClick={() => navigate("/alldocs/dataanalytics/pytorch")} className="text-[#554DE2] hover:underline">PyTorch guide</button> for deep learning.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Dataflow</h3>
                    <p className="text-[#4B5563]">
                        Fully managed service for stream and batch data processing. Built on Apache Beam for unified 
                        programming model.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Cloud AI Platform</h3>
                    <p className="text-[#4B5563]">
                        End-to-end ML platform with tools for data preparation, model training, and deployment. Integrates 
                        with TensorFlow and other ML frameworks.
                    </p>
                </div>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Preemptible VMs</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            For fault-tolerant workloads, use preemptible VMs to save up to 80% on compute costs. They're 
                            perfect for batch processing and stateless applications.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Leverage BigQuery for Analytics</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use BigQuery for data warehousing and analytics. It's serverless, scales automatically, and 
                            can query petabytes of data in seconds.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use GKE for Container Workloads</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            GKE is one of the best managed Kubernetes services. Use it for containerized applications 
                            to benefit from Google's Kubernetes expertise.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Optimize Storage Classes</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use appropriate storage classes (Standard, Nearline, Coldline, Archive) based on access 
                            frequency to optimize costs.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:link" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Related Resources</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <button onClick={() => navigate("/alldocs/cloud/kubernetes")} className="text-[#554DE2] hover:underline">Kubernetes on GCP (GKE)</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/overview")} className="text-[#554DE2] hover:underline">Data Analytics with BigQuery</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/pytorch")} className="text-[#554DE2] hover:underline">Machine Learning with PyTorch</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/cloud/azure")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/cloud/terraform")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:terraform" width="40" height="40" className="text-[#7B42BC]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Frameworks - Terraform</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

