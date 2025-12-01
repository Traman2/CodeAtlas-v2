import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-deployment", title: "What is Deployment?" },
    { id: "deployment-platforms", title: "Deployment Platforms" },
    { id: "deployment-strategies", title: "Deployment Strategies" },
    { id: "getting-started", title: "Getting Started" }
]

export const metadata: GuideMetadata = {
    id: 'deployment-overview',
    title: 'Deployment Overview',
    category: 'DEPLOYMENT',
    path: '/alldocs/deployment/overview',
    keywords: ['deployment', 'ci/cd', 'docker', 'kubernetes', 'vercel', 'netlify', 'devops', 'production'],
    description: 'Introduction to deployment strategies, CI/CD pipelines, and deployment platforms including Vercel, Netlify, Docker, and cloud providers.',
    searchableContent: `
        Deployment Overview
        CI/CD Docker Kubernetes
        Vercel Netlify cloud deployment
    `.trim()
};

export default function DeploymentOverview() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Deployment Overview
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Your comprehensive guide to deploying applications to production with modern platforms and tools
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:rocket-launch" className="w-70 h-70 text-[#1d1884]"/>
            </div>

            <h2 id="what-is-deployment" className="text-2xl font-semibold mt-12 mb-4">
                What is Deployment?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Deployment is the process of making your application available to users in a production environment. This 
                involves building your application, configuring servers, setting up databases, and ensuring your application 
                runs reliably and securely.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Modern deployment involves containerization, CI/CD pipelines, cloud platforms, and automated processes that 
                make deploying applications faster, safer, and more reliable.
            </p>

            <h2 id="deployment-platforms" className="text-2xl font-semibold mt-12 mb-4">
                Deployment Platforms
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                There are many platforms and tools for deploying applications, each suited for different use cases:
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
                <button 
                    onClick={() => navigate("/alldocs/deployment/vercel")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:vercel" width="40" height="40" className="text-[#000000] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Vercel</h3>
                        <p className="text-[#7b7f85] text-left">
                            Platform for frontend frameworks and static sites. Automatic deployments from Git, edge network, 
                            and serverless functions. Perfect for Next.js, React, and Vue applications.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/deployment/netlify")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:netlify" width="40" height="40" className="text-[#00C7B7] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Netlify</h3>
                        <p className="text-[#7b7f85] text-left">
                            Platform for deploying static sites and serverless functions. Continuous deployment from Git, 
                            form handling, and edge functions. Great for JAMstack applications.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/deployment/docker")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:docker" width="40" height="40" className="text-[#2496ED] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Docker</h3>
                        <p className="text-[#7b7f85] text-left">
                            Containerization platform for packaging applications. Deploy containers to any cloud provider. 
                            See our <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS</button>, 
                            <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure</button>, or 
                            <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP</button> guides for cloud deployment.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/deployment/kubernetes")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:kubernetes" width="40" height="40" className="text-[#326CE5] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">Kubernetes</h3>
                        <p className="text-[#7b7f85] text-left">
                            Container orchestration for managing containerized applications at scale. Use managed Kubernetes 
                            on <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS (EKS)</button>, 
                            <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure (AKS)</button>, or 
                            <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP (GKE)</button>.
                        </p>
                    </div>
                </button>

                <button 
                    onClick={() => navigate("/alldocs/deployment/github-actions")} 
                    className="px-6 py-4 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all"
                >
                    <Icon icon="mdi:github" width="40" height="40" className="text-[#181717] shrink-0" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-lg text-left">GitHub Actions</h3>
                        <p className="text-[#7b7f85] text-left">
                            CI/CD platform integrated with GitHub. Automate testing, building, and deployment workflows. 
                            Deploy to any cloud platform automatically.
                        </p>
                    </div>
                </button>
            </div>

            <h2 id="deployment-strategies" className="text-2xl font-semibold mt-12 mb-4">
                Deployment Strategies
            </h2>

            <div className="space-y-6 mt-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Continuous Deployment (CD)</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Automatically deploy code changes to production after passing tests. Platforms like Vercel and 
                            Netlify provide this out of the box.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Blue-Green Deployment</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Run two identical production environments. Switch traffic from blue (old) to green (new) for 
                            zero-downtime deployments. Supported on cloud platforms like <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS</button> and 
                            <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure</button>.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Canary Deployment</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Gradually roll out changes to a small subset of users before full deployment. Kubernetes and 
                            cloud platforms support this strategy.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Container Deployment</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Package applications in containers using Docker. Deploy to container services on 
                            <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS (ECS/Fargate)</button>, 
                            <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure (Container Instances)</button>, or 
                            <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP (Cloud Run)</button>.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Ready to deploy your application? Here's a recommended path:
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-6">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Recommended Learning Path</h3>
                        <ol className="space-y-2 text-[#4B5563]">
                            <li className="leading-relaxed">
                                <strong>1. Choose Your Platform:</strong> For frontend apps, start with Vercel or Netlify. 
                                For backend apps, consider Docker or cloud platforms.
                            </li>
                            <li className="leading-relaxed">
                                <strong>2. Set Up CI/CD:</strong> Use GitHub Actions or GitLab CI to automate deployments 
                                from your repository.
                            </li>
                            <li className="leading-relaxed">
                                <strong>3. Learn Containerization:</strong> Understand Docker for packaging applications 
                                consistently across environments.
                            </li>
                            <li className="leading-relaxed">
                                <strong>4. Explore Cloud Platforms:</strong> Deploy to <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS</button>, 
                                <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure</button>, or 
                                <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP</button> for scalable deployments.
                            </li>
                            <li className="leading-relaxed">
                                <strong>5. Monitor and Optimize:</strong> Set up monitoring, logging, and performance 
                                optimization for production applications.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => navigate("/alldocs/deployment/comparison")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:chart-bar" width="32" height="32" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Platform Comparison</h3>
                            <p className="text-[#6b7280] text-sm text-left">Compare deployment platforms</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                    onClick={() => navigate("/alldocs/deployment/vercel")}
                    className="w-full px-6 py-4 bg-[#554DE2]/5 border border-[#554DE2] hover:bg-[#554DE2]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:vercel" width="32" height="32" className="text-[#000000]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Start with Vercel</h3>
                            <p className="text-[#6b7280] text-sm text-left">Deploy frontend applications</p>
                        </div>
                    </div>
                    <Icon icon="mdi:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <p className="mt-8 mb-8 leading-relaxed text-[#6b7280]">
                Deployment is a crucial part of the development lifecycle. Choose the right platform for your needs, 
                automate your workflows, and ensure your applications are reliable and scalable. Happy deploying! 🚀
            </p>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/deployment/vercel")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:vercel" width="40" height="40" className="text-[#000000]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Platforms - Vercel</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

