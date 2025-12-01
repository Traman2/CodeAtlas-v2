import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-docker", title: "What is Docker?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "dockerfile", title: "Dockerfile" },
    { id: "docker-compose", title: "Docker Compose" },
    { id: "cloud-deployment", title: "Cloud Deployment" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'deployment-docker',
    title: 'Docker - Containerization',
    category: 'DEPLOYMENT',
    path: '/alldocs/deployment/docker',
    keywords: ['docker', 'containers', 'containerization', 'deployment', 'dockerfile', 'docker compose'],
    description: 'Complete guide to Docker for containerizing applications and deploying to cloud platforms.',
    searchableContent: `
        Docker containerization
        Dockerfile Docker Compose
        Container deployment
    `.trim()
};

const dockerfileExample = `
# Dockerfile for Node.js application
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["node", "server.js"]
`;

const dockerComposeExample = `
# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
`;

const dockerCommands = `
# Build image
docker build -t myapp .

# Run container
docker run -p 3000:3000 myapp

# Run in background
docker run -d -p 3000:3000 --name myapp myapp

# View running containers
docker ps

# View logs
docker logs myapp

# Stop container
docker stop myapp

# Remove container
docker rm myapp

# Docker Compose
docker-compose up -d
docker-compose down
`;

export default function DockerDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">DEPLOYMENT TOOLS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Docker - Containerization
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Package applications in containers for consistent deployment across any environment
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:docker" className="w-70 h-70 text-[#2496ED]"/>
            </div>

            <h2 id="what-is-docker" className="text-2xl font-semibold mt-12 mb-4">
                What is Docker?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Docker is a platform for developing, shipping, and running applications in containers. Containers 
                package an application with all its dependencies, ensuring it runs consistently across different environments.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Docker containers are lightweight, portable, and can run on any system that has Docker installed. This 
                makes deployment easier and more reliable.
            </p>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Install Docker Desktop from docker.com, then use these commands:
            </p>

            <div className="mb-6">
                <CodeBlock code={dockerCommands} language="bash" />
            </div>

            <h2 id="dockerfile" className="text-2xl font-semibold mt-12 mb-4">
                Dockerfile
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Create a Dockerfile to define how your application should be containerized:
            </p>

            <div className="mb-6">
                <CodeBlock code={dockerfileExample} language="dockerfile" />
            </div>

            <h2 id="docker-compose" className="text-2xl font-semibold mt-12 mb-4">
                Docker Compose
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Use Docker Compose to define and run multi-container applications:
            </p>

            <div className="mb-6">
                <CodeBlock code={dockerComposeExample} language="yaml" />
            </div>

            <h2 id="cloud-deployment" className="text-2xl font-semibold mt-12 mb-4">
                Cloud Deployment
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Deploy Docker containers to cloud platforms:
            </p>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">AWS</h3>
                    <p className="text-[#4B5563]">
                        Deploy to AWS ECS (Elastic Container Service) or Fargate. See our <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">AWS guide</button> for details.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Azure</h3>
                    <p className="text-[#4B5563]">
                        Use Azure Container Instances or Azure Kubernetes Service. See our <button onClick={() => navigate("/alldocs/cloud/azure")} className="text-[#554DE2] hover:underline">Azure guide</button> for details.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">GCP</h3>
                    <p className="text-[#4B5563]">
                        Deploy to Cloud Run or Google Kubernetes Engine. See our <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">GCP guide</button> for details.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Kubernetes</h3>
                    <p className="text-[#4B5563]">
                        Use Kubernetes for container orchestration. See our <button onClick={() => navigate("/alldocs/cloud/kubernetes")} className="text-[#554DE2] hover:underline">Kubernetes guide</button> for details.
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
                        <h3 className="font-semibold text-lg mb-2">Use Multi-Stage Builds</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use multi-stage builds to reduce image size. Build in one stage, copy only necessary files 
                            to the final stage.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Don't Store Secrets in Images</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use environment variables or secrets management services. Never commit secrets to Docker images.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use .dockerignore</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Create a .dockerignore file to exclude unnecessary files from the build context, similar to .gitignore.
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
                            <li>• <button onClick={() => navigate("/alldocs/cloud/kubernetes")} className="text-[#554DE2] hover:underline">Kubernetes for Container Orchestration</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">Deploy to AWS</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/gcp")} className="text-[#554DE2] hover:underline">Deploy to GCP</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/deployment/vercel")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/deployment/githubactions")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:github" width="40" height="40" className="text-[#181717]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">CI/CD - GitHub Actions</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

