import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-github-actions", title: "What is GitHub Actions?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "workflow-examples", title: "Workflow Examples" },
    { id: "cloud-deployment", title: "Cloud Deployment" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'deployment-github-actions',
    title: 'GitHub Actions - CI/CD',
    category: 'DEPLOYMENT',
    path: '/alldocs/deployment/github-actions',
    keywords: ['github actions', 'ci/cd', 'automation', 'deployment', 'workflow', 'github'],
    description: 'Complete guide to GitHub Actions for automating CI/CD pipelines and deploying to cloud platforms.',
    searchableContent: `
        GitHub Actions CI/CD
        Automation workflows
        Cloud deployment automation
    `.trim()
};

const basicWorkflow = `
# .github/workflows/deploy.yml
name: Deploy Application

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
`;

const deployWorkflow = `
# .github/workflows/deploy-aws.yml
name: Deploy to AWS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Deploy to AWS
      run: |
        # Your deployment commands here
        aws s3 sync ./dist s3://my-bucket
`;

const dockerWorkflow = `
# .github/workflows/docker.yml
name: Build and Push Docker Image

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Build Docker image
      run: docker build -t myapp:${"{ github.sha }"} .
    
    - name: Push to Docker Hub
      uses: docker/login-action@v2
      with:
        username: \${{ secrets.DOCKER_USERNAME }}
        password: \${{ secrets.DOCKER_PASSWORD }}
    
    - name: Push image
      run: docker push myapp:${"{ github.sha }"}
`;

export default function GitHubActionsDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">CI/CD</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                GitHub Actions - CI/CD
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Automate your workflows with GitHub Actions for testing, building, and deploying applications
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:github" className="w-70 h-70 text-[#181717]"/>
            </div>

            <h2 id="what-is-github-actions" className="text-2xl font-semibold mt-12 mb-4">
                What is GitHub Actions?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                GitHub Actions is a CI/CD platform integrated with GitHub. It allows you to automate workflows for 
                building, testing, and deploying your code directly from your GitHub repository.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                With GitHub Actions, you can create workflows that run on every push, pull request, or on a schedule. 
                You can deploy to any cloud platform automatically.
            </p>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Create workflows in <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">.github/workflows/</code>:
            </p>

            <div className="mb-6">
                <CodeBlock code={basicWorkflow} language="yaml" />
            </div>

            <h2 id="workflow-examples" className="text-2xl font-semibold mt-12 mb-4">
                Workflow Examples
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-4">Deploy to AWS</h3>
            <div className="mb-6">
                <CodeBlock code={deployWorkflow} language="yaml" />
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Build and Push Docker Image</h3>
            <div className="mb-6">
                <CodeBlock code={dockerWorkflow} language="yaml" />
            </div>

            <h2 id="cloud-deployment" className="text-2xl font-semibold mt-12 mb-4">
                Cloud Deployment
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Deploy to cloud platforms using GitHub Actions:
            </p>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">AWS</h3>
                    <p className="text-[#4B5563]">
                        Use AWS actions to deploy to EC2, ECS, Lambda, or S3. See our <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS guide</button> for details.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Azure</h3>
                    <p className="text-[#4B5563]">
                        Use Azure actions to deploy to App Service, Functions, or Container Instances. See our <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure guide</button>.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">GCP</h3>
                    <p className="text-[#4B5563]">
                        Use GCP actions to deploy to Cloud Run, GKE, or App Engine. See our <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP guide</button>.
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
                        <h3 className="font-semibold text-lg mb-2">Use Secrets</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Store sensitive information like API keys and passwords in GitHub Secrets. Never hardcode 
                            secrets in workflow files.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Cache Dependencies</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use caching actions to speed up workflows. Cache npm packages, Docker layers, and other 
                            dependencies.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Matrix Builds</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Test across multiple versions using matrix strategy. Test on different Node.js versions, 
                            Python versions, or operating systems.
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
                            <li>• <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">Deploy to AWS</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Deploy to Azure</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">Deploy to GCP</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/deployment/docker")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

