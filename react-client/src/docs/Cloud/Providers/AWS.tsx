import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-aws", title: "What is AWS?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "core-services", title: "Core Services" },
    { id: "compute-services", title: "Compute Services" },
    { id: "storage-services", title: "Storage Services" },
    { id: "database-services", title: "Database Services" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'cloud-aws',
    title: 'Amazon Web Services (AWS)',
    category: 'CLOUD',
    path: '/alldocs/cloud/aws',
    keywords: ['aws', 'amazon web services', 'ec2', 's3', 'lambda', 'rds', 'cloud computing', 'aws services'],
    description: 'Complete guide to Amazon Web Services including EC2, S3, Lambda, RDS, and other essential AWS services.',
    searchableContent: `
        Amazon Web Services AWS
        EC2 S3 Lambda RDS
        Cloud computing services
    `.trim()
};

const awsSetup = `
# Install AWS CLI
# macOS
brew install awscli

# Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Configure AWS CLI
aws configure
# Enter your Access Key ID
# Enter your Secret Access Key
# Enter default region (e.g., us-east-1)
# Enter default output format (json)
`;

const ec2Example = `
# Launch an EC2 instance using AWS CLI
aws ec2 run-instances \\
    --image-id ami-0c55b159cbfafe1f0 \\
    --instance-type t2.micro \\
    --key-name my-key-pair \\
    --security-group-ids sg-12345678 \\
    --subnet-id subnet-12345678 \\
    --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=MyServer}]'

# List running instances
aws ec2 describe-instances \\
    --filters "Name=instance-state-name,Values=running"

# Terminate an instance
aws ec2 terminate-instances --instance-ids i-1234567890abcdef0
`;

const s3Example = `
# Create an S3 bucket
aws s3 mb s3://my-unique-bucket-name

# Upload a file to S3
aws s3 cp myfile.txt s3://my-unique-bucket-name/

# Download a file from S3
aws s3 cp s3://my-unique-bucket-name/myfile.txt ./

# List all files in a bucket
aws s3 ls s3://my-unique-bucket-name/

# Sync a directory to S3
aws s3 sync ./local-folder s3://my-unique-bucket-name/folder/

# Delete a file
aws s3 rm s3://my-unique-bucket-name/myfile.txt
`;

const lambdaExample = `
# Create a Lambda function (Node.js)
// index.js
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            input: event,
        }),
    };
    return response;
};

# Deploy using AWS CLI
zip function.zip index.js
aws lambda create-function \\
    --function-name my-function \\
    --runtime nodejs18.x \\
    --role arn:aws:iam::123456789012:role/lambda-role \\
    --handler index.handler \\
    --zip-file fileb://function.zip
`;


export default function AWSDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">CLOUD PROVIDERS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Amazon Web Services (AWS)
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                The world's most comprehensive and widely adopted cloud platform, offering over 200 fully-featured services
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:aws" className="w-70 h-70 text-[#FF9900]"/>
            </div>

            <h2 id="what-is-aws" className="text-2xl font-semibold mt-12 mb-4">
                What is AWS?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Amazon Web Services (AWS) is a comprehensive cloud computing platform launched by Amazon in 2006. It provides 
                on-demand cloud computing platforms and APIs to individuals, companies, and governments on a metered pay-as-you-go basis.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                AWS has the largest market share in cloud computing and offers the most extensive range of services, from 
                compute and storage to machine learning and IoT. With data centers in 31 geographic regions worldwide, AWS 
                provides global infrastructure for your applications.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Choose AWS?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Largest Service Catalog:</strong> Over 200 services covering every use case</li>
                            <li>• <strong>Global Infrastructure:</strong> 31 regions, 99 availability zones worldwide</li>
                            <li>• <strong>Mature Ecosystem:</strong> Extensive documentation, training, and community support</li>
                            <li>• <strong>Free Tier:</strong> Generous free tier for 12 months to get started</li>
                            <li>• <strong>Enterprise Ready:</strong> Used by millions of customers including startups and Fortune 500 companies</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                To get started with AWS, you'll need to create an account and set up the AWS CLI (Command Line Interface) 
                for managing resources programmatically:
            </p>

            <div className="mb-6">
                <CodeBlock code={awsSetup} language="bash" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">AWS Free Tier</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            AWS offers a free tier that includes:
                        </p>
                        <ul className="mt-2 space-y-1 text-[#4B5563]">
                            <li>• 750 hours/month of EC2 t2.micro instances</li>
                            <li>• 5 GB of S3 storage</li>
                            <li>• 750 hours/month of RDS database</li>
                            <li>• 1 million Lambda requests per month</li>
                            <li>• And much more for 12 months</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="core-services" className="text-2xl font-semibold mt-12 mb-4">
                Core Services
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                AWS offers services across compute, storage, databases, networking, security, and more. Here are the 
                essential services every AWS user should know:
            </p>

            <h2 id="compute-services" className="text-2xl font-semibold mt-12 mb-4">
                Compute Services
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-4">EC2 (Elastic Compute Cloud)</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                EC2 provides resizable compute capacity in the cloud. You can launch virtual servers (instances) with 
                different configurations for CPU, memory, storage, and networking.
            </p>

            <div className="mb-6">
                <CodeBlock code={ec2Example} language="bash" />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Lambda (Serverless Functions)</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time 
                you consume. Perfect for event-driven applications and microservices.
            </p>

            <div className="mb-6">
                <CodeBlock code={lambdaExample} language="javascript" />
            </div>

            <h2 id="storage-services" className="text-2xl font-semibold mt-12 mb-4">
                Storage Services
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-4">S3 (Simple Storage Service)</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                S3 is object storage built to store and retrieve any amount of data from anywhere. It's designed for 
                99.999999999% (11 9's) of durability and is used for backup, archiving, content distribution, and more.
            </p>

            <div className="mb-6">
                <CodeBlock code={s3Example} language="bash" />
            </div>

            <h2 id="database-services" className="text-2xl font-semibold mt-12 mb-4">
                Database Services
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">RDS (Relational Database Service)</h3>
                    <p className="text-[#4B5563]">
                        Managed relational database service supporting MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, 
                        and Amazon Aurora. Handles backups, patching, and scaling automatically.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">DynamoDB</h3>
                    <p className="text-[#4B5563]">
                        Fast and flexible NoSQL database for applications that need consistent, single-digit millisecond 
                        latency at any scale. Fully managed with automatic scaling.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">ElastiCache</h3>
                    <p className="text-[#4B5563]">
                        In-memory caching service supporting Redis and Memcached. Improves application performance by 
                        storing frequently accessed data in memory.
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
                        <h3 className="font-semibold text-lg mb-2">Use Infrastructure as Code</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use Terraform or CloudFormation to manage your infrastructure. This ensures consistency, 
                            version control, and easier disaster recovery. See our <button onClick={() => navigate("/alldocs/cloud/terraform")} className="text-[#554DE2] hover:underline">Terraform guide</button> for more.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Implement Proper IAM Policies</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Follow the principle of least privilege. Grant only the minimum permissions necessary for 
                            users and services to perform their tasks.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Enable CloudWatch Monitoring</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Set up CloudWatch alarms and dashboards to monitor your resources. Track metrics like CPU 
                            utilization, network traffic, and error rates.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Multiple Availability Zones</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Deploy resources across multiple availability zones for high availability and fault tolerance. 
                            This protects against single data center failures.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        5
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Implement Cost Optimization</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use Reserved Instances for predictable workloads, Spot Instances for flexible workloads, 
                            and regularly review and clean up unused resources.
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
                            <li>• <button onClick={() => navigate("/alldocs/cloud/terraform")} className="text-[#554DE2] hover:underline">Terraform for Infrastructure as Code</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/kubernetes")} className="text-[#554DE2] hover:underline">Kubernetes on AWS (EKS)</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/deployment/docker")} className="text-[#554DE2] hover:underline">Docker and Container Deployment</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/cloud/comparison")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/cloud/azure")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:microsoft-azure" width="40" height="40" className="text-[#0078D4]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Cloud Providers - Azure</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

