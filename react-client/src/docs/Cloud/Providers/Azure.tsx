import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-azure", title: "What is Azure?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "core-services", title: "Core Services" },
    { id: "microsoft-integration", title: "Microsoft Integration" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'cloud-azure',
    title: 'Microsoft Azure',
    category: 'CLOUD',
    path: '/alldocs/cloud/azure',
    keywords: ['azure', 'microsoft azure', 'azure services', 'cloud computing', 'enterprise cloud', 'hybrid cloud'],
    description: 'Complete guide to Microsoft Azure including App Service, Functions, Virtual Machines, and Microsoft ecosystem integration.',
    searchableContent: `
        Microsoft Azure
        Azure services cloud computing
        Enterprise cloud platform
    `.trim()
};

const azureSetup = `
# Install Azure CLI
# macOS
brew install azure-cli

# Linux
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# Windows (PowerShell)
Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\\AzureCLI.msi

# Login to Azure
az login

# Set subscription
az account set --subscription "Your Subscription Name"
`;

const vmExample = `
# Create a resource group
az group create --name myResourceGroup --location eastus

# Create a virtual machine
az vm create \\
    --resource-group myResourceGroup \\
    --name myVM \\
    --image UbuntuLTS \\
    --admin-username azureuser \\
    --generate-ssh-keys

# List all VMs
az vm list --output table

# Stop a VM
az vm stop --resource-group myResourceGroup --name myVM

# Delete a VM
az vm delete --resource-group myResourceGroup --name myVM
`;

const appServiceExample = `
# Create an App Service plan
az appservice plan create \\
    --name myAppServicePlan \\
    --resource-group myResourceGroup \\
    --sku B1 \\
    --is-linux

# Create a web app
az webapp create \\
    --resource-group myResourceGroup \\
    --plan myAppServicePlan \\
    --name myUniqueAppName \\
    --runtime "NODE|18-lts"

# Deploy code from Git
az webapp deployment source config \\
    --name myUniqueAppName \\
    --resource-group myResourceGroup \\
    --repo-url https://github.com/username/repo \\
    --branch main \\
    --manual-integration
`;

const functionExample = `
# Create a function app
az functionapp create \\
    --resource-group myResourceGroup \\
    --consumption-plan-location eastus \\
    --runtime node \\
    --runtime-version 18 \\
    --functions-version 4 \\
    --name myFunctionApp \\
    --storage-account mystorageaccount

# Deploy a function
func azure functionapp publish myFunctionApp
`;

export default function AzureDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">CLOUD PROVIDERS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Microsoft Azure
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Enterprise cloud platform with deep integration into the Microsoft ecosystem and strong hybrid cloud capabilities
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:microsoft-azure" className="w-70 h-70 text-[#0078D4]"/>
            </div>

            <h2 id="what-is-azure" className="text-2xl font-semibold mt-12 mb-4">
                What is Azure?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and 
                managing applications and services through Microsoft-managed data centers. Launched in 2010, Azure has 
                grown to be the second-largest cloud provider globally.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Azure is particularly strong for enterprises already using Microsoft technologies. It offers seamless 
                integration with Office 365, Active Directory, .NET, and other Microsoft products, making it an ideal 
                choice for Microsoft-centric organizations.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Choose Azure?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Microsoft Integration:</strong> Seamless integration with Office 365, Active Directory, and .NET</li>
                            <li>• <strong>Hybrid Cloud:</strong> Best-in-class hybrid cloud solutions with Azure Arc and Azure Stack</li>
                            <li>• <strong>Enterprise Focus:</strong> Strong compliance certifications and enterprise-grade security</li>
                            <li>• <strong>Global Reach:</strong> 60+ regions worldwide, more than any other provider</li>
                            <li>• <strong>Developer Tools:</strong> Excellent integration with Visual Studio and Azure DevOps</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                To get started with Azure, create a free account and install the Azure CLI:
            </p>

            <div className="mb-6">
                <CodeBlock code={azureSetup} language="bash" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Azure Free Account</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            Azure offers a free account with:
                        </p>
                        <ul className="mt-2 space-y-1 text-[#4B5563]">
                            <li>• $200 credit for 30 days</li>
                            <li>• 12 months of free services (Virtual Machines, Storage, etc.)</li>
                            <li>• Always free services (App Service, Functions, etc.)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="core-services" className="text-2xl font-semibold mt-12 mb-4">
                Core Services
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-4">Virtual Machines</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                Azure Virtual Machines provide on-demand, scalable computing resources. Choose from Windows or Linux VMs 
                with various sizes and configurations.
            </p>

            <div className="mb-6">
                <CodeBlock code={vmExample} language="bash" />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">App Service</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                Azure App Service is a fully managed platform for building, deploying, and scaling web apps. Supports .NET, 
                Node.js, Python, Java, PHP, and more.
            </p>

            <div className="mb-6">
                <CodeBlock code={appServiceExample} language="bash" />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Azure Functions</h3>
            <p className="mt-4 mb-6 leading-relaxed">
                Serverless compute service for running event-driven code. Perfect for microservices, APIs, and background 
                processing tasks.
            </p>

            <div className="mb-6">
                <CodeBlock code={functionExample} language="bash" />
            </div>

            <h2 id="microsoft-integration" className="text-2xl font-semibold mt-12 mb-4">
                Microsoft Integration
            </h2>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Active Directory Integration</h3>
                    <p className="text-[#4B5563]">
                        Azure Active Directory (Azure AD) provides identity and access management. Seamlessly integrate 
                        with on-premises Active Directory for hybrid environments.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Office 365 Integration</h3>
                    <p className="text-[#4B5563]">
                        Office 365 runs on Azure infrastructure. Share identities, data, and services between Office 365 
                        and Azure applications.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">.NET Development</h3>
                    <p className="text-[#4B5563]">
                        Azure provides first-class support for .NET applications. Use Visual Studio for seamless development 
                        and deployment. See our <button onClick={() => navigate("/alldocs/desktop/dotnet")} className="text-[#554DE2] hover:underline">.NET guide</button> for more.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Azure DevOps</h3>
                    <p className="text-[#4B5563]">
                        Complete DevOps toolchain for planning, building, testing, and deploying applications. Integrates 
                        seamlessly with Azure services.
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
                        <h3 className="font-semibold text-lg mb-2">Use Resource Groups</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Organize related resources in resource groups for easier management, billing, and access control. 
                            Group resources by application, environment, or team.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Leverage Azure AD</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use Azure Active Directory for identity management. Enable multi-factor authentication and 
                            conditional access policies for enhanced security.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Managed Services</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Prefer managed services like App Service, Azure SQL Database, and Azure Functions over 
                            managing infrastructure yourself to reduce operational overhead.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Implement Monitoring</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use Azure Monitor and Application Insights to track performance, set up alerts, and gain 
                            insights into your applications.
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
                            <li>• <button onClick={() => navigate("/alldocs/desktop/dotnet")} className="text-[#554DE2] hover:underline">.NET Development on Azure</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/desktop/aspnet")} className="text-[#554DE2] hover:underline">ASP.NET on Azure</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/terraform")} className="text-[#554DE2] hover:underline">Terraform for Azure</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/cloud/aws")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/cloud/gcp")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:google-cloud" width="40" height="40" className="text-[#4285F4]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Cloud Providers - GCP</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

